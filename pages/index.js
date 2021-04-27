import React from "react";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription, urlFor } from "../utils/sanity";
import Error from "next/error";

import RenderHeader from "../components/render/renderHeader";
import RenderSections from "../components/render/renderSections";
import RenderFooter from "../components/render/renderFooter";

function IndexPage(props) {
  const { allData, preview } = props;
  const router = useRouter();

  // console.log("allData => ", allData);

  // If the page is not yet generated, this will be displayed initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!allData) {
    return <Error statusCode={404} />;
  }

  const { data: page } = usePreviewSubscription(query, {
    initialData: allData,
    enabled: preview || router.query.preview !== null,
  });


  return (
    <React.Fragment>
      <RenderHeader data={page.globalData} />
      <RenderSections data={page} />
      <RenderFooter data={page.globalData} />
    </React.Fragment>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  var allData = await getClient(preview).fetch(query);

  return {
    props: { preview, allData },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

export default IndexPage;

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
  'pageData': *[(_type == "page" && slug.current=="home" && !(_id in path('drafts.**')))][0] {
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
    'recentPosts': *[_type=="post" && !(_id in path('drafts.**'))]| order(publishedAt desc)[0..2]{
      slug, title, author->{image,name}, excerpt, mainImage, publishedAt, tags,
    }
  }
}`;
