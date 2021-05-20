import { useRouter } from "next/router";
import { sanityClient, usePreviewSubscription } from "../../utils/sanity";

import Error from "next/error";
import { postList, postDetail } from "../../modules/groq/post";

import RenderHeader from "../../components/render/renderHeader";
import RenderFooter from "../../components/render/renderFooter";

import { BlogDetail } from "./../../components/blog/BlogDetail";

export async function getStaticProps({ params = {}, preview = false }) {
  const { id } = params;
  const pageData = await sanityClient.fetch(postDetail, { slug: id });

  return {
    props: { pageData: pageData || {} },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  let routes = await sanityClient.fetch(postList);
  return {
    paths: routes || null,
    fallback: true,
  };
}

function BlogPostContainer({ pageData }) {
  const router = useRouter();

  console.log("[]", pageData);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!pageData) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <RenderHeader data={pageData.globalData} />
      {pageData.pageData && <BlogDetail post={pageData.pageData} />}
      <RenderFooter data={pageData.globalData} />
    </>
  );
}

export default BlogPostContainer;
