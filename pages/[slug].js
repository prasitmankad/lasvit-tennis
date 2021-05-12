import React from "react";
import { useRouter } from "next/router";
import { getClient, sanityClient } from "../utils/sanity";
import Error from "next/error";

import RenderHeader from "../components/render/renderHeader";
import RenderSections from "../components/render/renderSections";
import RenderFooter from "../components/render/renderFooter";

import query from "../modules/groq/page";

export async function getStaticProps({ params = {}, preview = false }) {
  const { slug } = params;
  var pageData = await sanityClient.fetch(query, { slug });

  return {
    props: { preview, pageData },
    revalidate: 1,
  };
}
// TODO next.js fix
function isInWhitelist(slug) {
  if (!slug) return false;
  if (slug === 'account' || slug ==='blog' || slug === 'courses' || slug === 'login') {
    return false
  }
  return true;
}
export async function getStaticPaths() {
  var routes = await getClient().fetch(
    `*[_type == "page" && defined(slug.current)]{"params": {"slug": slug.current}}`
  );
  routes = routes.filter(e => isInWhitelist(e.params.slug))
  return {
    paths: routes || null,
    fallback: true,
  };
}

function PageContainer({ pageData, slug }) {
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

export default PageContainer;
