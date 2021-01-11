import Error from "next/error";
import { useRouter } from "next/router";
import {
  getClient,
  PortableText,
  usePreviewSubscription,
} from "../utils/sanity";

// *[(_type == "siteConfig" || _type == "page") && !(_id in path('drafts.**')) ] 
// {
// 	title,
//   tagline,
//   siteDescription,
//   mainNavigation,
//   footerNavigation,
//   frontpage,
//   logo,
//   content,
//   description
// }

const query = `*[(_type == "siteConfig" || (_type == "page" && title=="Terms & Conditions")) && !(_id in path('drafts.**')) ] 
{
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

  console.log("Terms Page Data => ",pageData)
  return (
    <>
      {/* OUR SERVICES  */}

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              WEBSITE
            </h2>
            <h1
              name="learnmore"
              id="learnmore"
              class="title-font sm:text-1xl text-2xl mb-4 font-medium text-gray-900"
            >
              {props.pageData[0].title}
            </h1>

            <p class="lg:w-2/3 mx-auto leading-relaxed text-left">
            {props.pageData[0].description}
            </p>
          </div>
        </div>
      </section>
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
