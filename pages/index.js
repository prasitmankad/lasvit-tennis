import React from "react";
import Error from "next/error";
import { useRouter } from "next/router";
import { sanityClient } from "../utils/sanity";
import RenderHeader from "../components/render/renderHeader";
import RenderSections from "../components/render/renderSections";
import RenderFooter from "../components/render/renderFooter";

import RenderNewPages from "../components/render/renderNewPages";

import { pageCollection as query } from "../modules/groq/page";

export async function getStaticProps() {
  var pageData = await sanityClient.fetch(query, { slug: "home" });

  return {
    props: { pageData },
    revalidate: 1,
  };
}

function IndexPage({ pageData }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!pageData) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <RenderHeader data={pageData.globalData} />
      <RenderSections data={pageData} />
      <RenderFooter data={pageData.globalData} />
    </>
  );
}

export default IndexPage;
