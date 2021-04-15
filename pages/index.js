import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import RenderSections from "../components/RenderSections";
import { PageWrapper } from "./PageWrapper";

const query = `{
  'siteData': *[(_type == "globalSettings" && !(_id in path('drafts.**')))][0] {
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
  // console.log("pageData =>", pageData);

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!pageData) {
    return <Error statusCode={404} />;
  }

  const { data: page } = usePreviewSubscription(query, {
    initialData: pageData,
    enabled: preview || router.query.preview !== null,
  });

  return (
    <>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <PageWrapper page={page}>
        <RenderSections sections={pageData.mainContent.content} />
      </PageWrapper>
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
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

export default IndexPage;
