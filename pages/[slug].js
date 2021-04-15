import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import RenderSections from "../components/RenderSections";
import { PageWrapper } from "./PageWrapper";

const query = `{
  'siteData': *[(_type == "globalSettings")][0] 
  {
	title,
  tagline, 
  siteDescription,
  mainNavigation,
  footerNavigation,
  frontpage,
  logo
	},
  'mainContent': *[(_type == "route" && slug.current==$slug)][0] {
    
    page->{
    ...,
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
}
}`;

function PageContainer({ pageData, preview, slug }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!pageData) {
    return <Error statusCode={404} />;
  }

  const { data: page = {} } = usePreviewSubscription(query, {
    params: { slug },
    initialData: pageData,
    enabled: preview || router.query.preview !== null,
  });
  console.log("page var -> ", page);
  return (
    <PageWrapper page={page}>
      <RenderSections sections={page.mainContent.page.content} />
    </PageWrapper>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const { slug } = params;
  var pageData = await getClient(preview).fetch(query, { slug });
  // var settingsData = await getClient().fetch(settingsQuery);
  // var arrData = [pageData, settingsData];
  // pageData = arrData;

  // pageData = Object.assign(settingsData)
  // page.push(settingsData);
  // console.log("[joined pageData] ->", pageData);

  return {
    props: { preview, pageData, slug },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

export async function getStaticPaths() {
  var routes = await getClient().fetch(
    `*[_type == "page" && defined(slug.current)]{"params": {"slug": slug.current}}`
  );
  // console.log("Routes =>",routes);
  return {
    paths: routes || null,
    fallback: true,
  };
}

export default PageContainer;
