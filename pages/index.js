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
  description,
}`;
const queryPosts = `*[_type == "post" && !(_id in path('drafts.**')) ][4] {
	_id,
  authors,
  excerpt,
  postImage,
  title
}`;

// main page component renders
function IndexPage(props) {
  const { pageData, preview } = props;
  const router = useRouter();

  console.log ("Merged PageData =>",pageData)
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
  var postData = await getClient(preview).fetch(queryPosts);

  pageData[0]["postData"] = postData;
  console.log("PostData with Recent Blogs ==>", pageData);

  return {
    props: {
      preview,
      pageData,
    },
  };
}

export default IndexPage;
