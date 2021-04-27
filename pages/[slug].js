// all root-level pages except home page
import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import Error from "next/error";
import Link from "next/link";
import { urlFor } from "../utils/sanity";

import RenderHeader from "../components/render/renderHeader";
import RenderSections from "../components/render/renderSections";
import RenderFooter from "../components/render/renderFooter";

const query = `{
  'globalData': *[(_type == "globalSettings" && !(_id in path('drafts.**')))][0] {
	  businessInfo {
      title, tagline, siteDescription, contact,
      'teamMembers': *[(_type == "teamMember" && !(_id in path('drafts.**')))] {
        name, position, shortDescription, image[], longDescription
      },      
    },
    branding,
    header {menu [] {...,link-> {slug,title}}},
    footer {signup,columns [] {heading,links[]->}},
    siteSettings{...,homepage->{slug,title}},
	},
  'pageData': *[(_type == "page" && slug.current==$slug && !(_id in path('drafts.**')))][0] {
    slug,
    title,
    'sections':content[]{
      ...,
      buttons[]{...,links {route->{slug}}},
      link {text,link->{slug}},
      'team': *[(_type == "teamMember" && !(_id in path('drafts.**')))] {
        name, position, shortDescription, image[]
      }, 
      body[]{...,markDefs[]{...,_type == "linkBlog" => {"slug": @.reference->slug}}}
    },
    'recentPosts': *[_type=="post" && !(_id in path('drafts.**'))]| order(publishedAt desc)[]{
      slug, title, author->{image,name}, excerpt, mainImage, publishedAt, tags,
    }
  }
}`;

function PageContainer({ allData, preview, slug }) {
  //console.log("PageContainer Props // ", allData);
  const router = useRouter();

  // If the page is not yet generated, this will be displayed initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!allData) {
    return <Error statusCode={404} />;
  }

  const { data: page = {} } = usePreviewSubscription(query, {
    params: { slug },
    initialData: allData,
    enabled:
      preview ||
      (router.query.preview !== undefined && router.query.preview !== null),
  });

  return (
    <React.Fragment>
      <RenderHeader data={allData.globalData} />
      <RenderSections data={allData} />
      <RenderFooter data={allData.globalData} />
    </React.Fragment>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {

  const { slug } = params;   // get all the slugs from params (passed in from getStaticPaths)
  var allData = await getClient(preview).fetch(query, { slug }); // run the query and pass in slug var to run against

  if (!allData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { preview, allData },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

export async function getStaticPaths() {
  // get list of available paths for which dynamic page will be rendered
  // Next.js will statically pre-render all the paths specified by getStaticPaths.

  var routes = await getClient().fetch(
    `*[_type == "page" && !(_id in path('drafts.**'))]{"params": {"slug": slug.current}}`
  );
  return {
    paths: routes || null,
    fallback: true,
  };
}

export default PageContainer;
