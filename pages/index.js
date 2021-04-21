import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription, urlFor } from "../utils/sanity";

import RenderHeader from "../components/render/renderHeader";
import RenderSections from "../components/render/renderSections";
import RenderFooter from "../components/render/renderFooter";

// construct query for global data and page data
// allData -- overall grouping for global and page data in response
// globalData -- global reusable content
// pageData -- content for this specific page, not in draft

// FIXME: Update query to return Team Member info
// FIXME: Update query to return Post Auther info
const query = `{
  'globalData': *[(_type == "globalSettings" && !(_id in path('drafts.**')))][0] {
	  businessInfo {
      title, 
      tagline, 
      siteDescription, 
      contact,
      'teamMembers': *[(_type == "teamMember" && !(_id in path('drafts.**')))] {
        name, position, shortDescription, image[], longDescription
      },      
    },
    branding,
    header {
      menu [] {
        ...,link-> {
            slug,title
            }
      }
    },
    footer {
      signup,
      columns [] {
        heading,links[]->
      }
    },
    siteSettings
	},
  'pageData': *[(_type == "page" && title=="Home" && !(_id in path('drafts.**')))][0] {
    slug,
    title,
    'sections':content,
    'recentPosts': *[_type=="post" && !(_id in path('drafts.**'))]| order(publishedAt desc)[0..2]{
      _id,
    author->{image,name},
    excerpt,
    mainImage,
    publishedAt,
    slug,
    tags,
    title,
    }
  }
}`;

// main page component renders
function IndexPage(props) {
  const { allData, preview } = props;
  const router = useRouter();

  // console.log("allData => ", allData); // write out allData for debugging

  // If the page is not yet generated, this will be displayed initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!allData) {
    return <Error statusCode={404} />;
  }

  const { data: page } = usePreviewSubscription(query, {
    initialData: allData,
    enabled: preview || router.query.preview !== null,
  });

  return (
    <>
      <RenderHeader data={allData.globalData} />
      <RenderSections data={allData} />
      <RenderFooter data={allData.globalData} />

    </>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  var allData = await getClient(preview).fetch(query);

  return {
    props: { preview, allData },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

export default IndexPage;
