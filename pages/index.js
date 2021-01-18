import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import { urlFor } from "../utils/sanity";
import RenderSections from "../components/RenderSections";

const query = `{
  'siteData': *[(_type == "siteConfig" && !(_id in path('drafts.**')))][0] {
	title,
  tagline,
  siteDescription,
  mainNavigation,
  footerNavigation,
  frontpage,
  logo
	},
  'mainContent': *[(_type == "page" && title=="Home" && !(_id in path('drafts.**')))][0] {
    'recentPosts': *[_type=="post" && !(_id in path('drafts.**'))]| order(publishedAt desc)[0..3],
    title,
    content[]{
      ...,
      team_members[]{
        author->{
        _id,
        _type,
        bio,
        headline,
        image,
        name,
        slug
        }
      }
    }
}
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

  console.log("pageData =>", pageData);
  

  return (
    <>
      <RenderSections sections={pageData.mainContent.content} />
    </>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  var pageData = await getClient(preview).fetch(query);
  // var postData = await getClient(preview).fetch(queryPosts);

  // pageData[0]["postData"] = postData;
  // console.log("PostData with Recent Blogs ==>", pageData);

  return {
    props: {
      preview,
      pageData,
    },
  };
}

export default IndexPage;
