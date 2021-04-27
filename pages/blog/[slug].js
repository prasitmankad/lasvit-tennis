import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
import { urlFor, PortableText } from "../../utils/sanity";
import Link from "next/link";
import Error from "next/error";

import RenderHeader from "../../components/render/renderHeader";
import RenderFooter from "../../components/render/renderFooter";
import RenderPost from "../../components/render/renderPost"

function BlogPostContainer(props) {
  const { allData, preview } = props;
  const router = useRouter();

  // If the page is not yet generated, this will be displayed initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!allData) {
    return <Error statusCode={404} />;
  }

  const { data: post = {} } = usePreviewSubscription(query, {
    params: { slug: allData?.slug?.current },
    initialData: allData,
    enabled:
      preview ||
      (router.query.preview !== undefined && router.query.preview !== null),
  });

  //console.log("BlogPostContainer Props // ", post);

  return (
    <React.Fragment>
      <RenderHeader data={post.globalData} />
      <RenderPost data={post.pageData} />
      <RenderFooter data={post.globalData} />
    </React.Fragment>
  );
}

export async function getStaticProps({ params, preview = false }) {
  var allData = await getClient(preview).fetch(query, { slug: params.slug });

  return {
    props: { preview, allData },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

export async function getStaticPaths() {
  var routes = await getClient().fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );
  return {
    paths: routes.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export default BlogPostContainer;

const query = `{
  'globalData': *[(_type == "globalSettings" && !(_id in path('drafts.**')))][0] {
    businessInfo {
      title, tagline, siteDescription, contact,
          
    },
    branding,
    header {menu [] {...,link-> {slug,title}}},
    footer {signup,columns [] {heading,links[]->}},
    siteSettings{...,homepage->{slug,title}},
	},
  'pageData': *[(_type == "post" && defined(slug.current) && !(_id in path('drafts.**')))][0] {
    slug, title, author->{image,name}, mainImage, publishedAt, tags,body,excerpt
  }
}`;
