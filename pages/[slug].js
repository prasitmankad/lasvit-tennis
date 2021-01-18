import Error from "next/error";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import RenderSections from "../components/RenderSections";

// const query = groq`*[_type == "siteConfig" || (_type == "route" && slug.current == $slug)][0]{page->}`;
const query = `{
  'siteData': *[(_type == "siteConfig" && !(_id in path('drafts.**')))][0] 
  {
	title,
  tagline,
  siteDescription,
  mainNavigation,
  footerNavigation,
  frontpage,
  logo
	},
  'mainContent': *[(_type == "route" && slug.current==$slug) && !(_id in path('drafts.**'))][0] {
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
  if (!router.isFallback && !pageData) {
    return <Error statusCode={404} />;
  }

  const { data: { page = {} } = {} } = usePreviewSubscription(query, {
    params: { slug },
    initialData: pageData,
    enabled: preview || router.query.preview !== null,
  });

  return (
    <>
      <RenderSections sections={pageData.mainContent.page.content} />
    </>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const { slug } = params;
  var  pageData  = await getClient(preview).fetch(query, { slug });
  // var settingsData = await getClient().fetch(settingsQuery);
  // var arrData = [pageData, settingsData];
  // pageData = arrData;

  // pageData = Object.assign(settingsData)
  // pageData.push(settingsData);
  // console.log("[joined pageData] ->", pageData);

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
