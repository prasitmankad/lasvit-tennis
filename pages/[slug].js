import Error from "next/error";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import LandingPage from "../components/LandingPage";
import { getClient, usePreviewSubscription } from "../utils/sanity";

const settingsQuery = `*[_type == "siteConfig"][0]`;
const query = groq`*[_type == "siteConfig" || (_type == "route" && slug.current == $slug)][0]{page->}`; 

// get page details from routes

function PageContainer({ pageData, preview, slug }) {
  const router = useRouter();
  if (!router.isFallback && !pageData) {
    return <Error statusCode={404} />;
  }

  const { data: { page = {} } = {} } = usePreviewSubscription(query, {
    params: { slug },
    initialData: pageData,
    enabled: preview || router.query.preview !== null,
  });

  return <LandingPage page={page} />;
}

export async function getStaticProps({ params = {}, preview = false }) {
  const { slug } = params;
  var { page: pageData } = await getClient(preview).fetch(query, { slug });
  // var settingsData = await getClient().fetch(settingsQuery);

  // pageData = { ...pageData, ...settingsData };
  console.log("Consolidated Routes ==> ", query);

  return {
    props: { preview, pageData, slug },
  };
}

export async function getStaticPaths() {
  var routes = await getClient().fetch(
    `*[_type == "route" && defined(slug.current)]{"params": {"slug": slug.current}}`
  );

  return {
    paths: routes || null,
    fallback: true,
  };
}

export default PageContainer;
