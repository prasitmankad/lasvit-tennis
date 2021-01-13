import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import { urlFor } from "../utils/sanity";
import RenderSections from "../components/RenderSections";

// const query = `*[_type == "siteConfig"][0]`;
// const pageQuery = `*[_type == "siteConfig" || (_type == "page" && title=="Home")]`;
// *[_type == "siteConfig" || (_type == "route" && slug.current == $slug)][0]{page->}

const query = `*[(_type == "siteConfig" || (_type == "page" && title=="Home")) && !(_id in path('drafts.**')) ] {
	title,
  tagline,
  siteDescription,
  mainNavigation,
  footerNavigation,
  frontpage,
  logo,
  content,
  description
}`;

// main page component renders
function IndexPage(props) {
  const { pageData, preview } = props;
  const router = useRouter();

  if (!router.isFallback && !pageData) {
    return <Error statusCode={404} />;
  }

  const { data: config } = usePreviewSubscription(query, {
    initialData: pageData,
    enabled: preview || router.query.preview !== null,
  });

 // console.log("props =>", props);

  return (
    <>
      <RenderSections sections={pageData[0].content} />


    </>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  var pageData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      pageData,
    },
  };
}

export default IndexPage;
