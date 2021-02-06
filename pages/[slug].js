import Error from "next/error";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import RenderSections from "../components/RenderSections";
import Link from "next/link";
import { urlFor } from "../utils/sanity";

const query = `{
  'siteData': *[(_type == "siteConfig")][0] 
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
    return <div>Loading...</div>
  }

  if (!pageData) {
    return <Error statusCode={404} />;
  }

  const { data: page = {} } = usePreviewSubscription(query, {
    params: { slug },
    initialData: pageData,
    enabled: preview || router.query.preview !== null,
  });
console.log("page var -> ",page)
  return (
    <>
      <div className="bg-white">
        <header class="text-gray-600 body-font">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href="/">
              <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                <img
                  src={urlFor(page.siteData.logo)
                    .auto("format")
                    .width(125)
                    // .height(400)
                    .fit("crop")
                    .quality(80)}
                  alt={
                    page.siteData.logo?.alt ||
                    `Photo of ${page.siteData.title}`
                  }
                />
              </a>
            </Link>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link href="/">
                <a class="mr-5 hover:text-gray-900 cursor-pointer">Home</a>
              </Link>
              <Link href="/about">
                <a class="mr-5 hover:text-gray-900 cursor-pointer">About</a>
              </Link>
              <Link href="/blog">
                <a class="mr-5 hover:text-gray-900 cursor-pointer">Blog</a>
              </Link>
              {/* <Link href="/contact">
                <a class="mr-5 hover:text-gray-900 cursor-pointer">
                  Contact Us
                </a>
              </Link> */}
            </nav>
          </div>
        </header>
        <RenderSections sections={page.mainContent.page.content} />
        <footer class="text-gray-600 body-font">
          <div class="bg-gray-100 border-t border-gray-200">
            <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
              <Link href="/">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                  <img
                    src={urlFor(page.siteData.logo)
                      .auto("format")
                      .width(80)
                      // .height(400)
                      .fit("crop")
                      .quality(80)}
                    alt={
                      page.siteData.logo?.alt ||
                      `Photo of ${page.siteData.title}`
                    }
                  />
                </a>
              </Link>

              <p class="text-sm text-gray-600 sm:ml-6 sm:mt-0 mt-4">
                © 2021 Lasvit Tennis. All rights reserved.
              </p>

              <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
                <Link href="/privacy">
                  <a
                    // href="/privacy"
                    rel="noopener noreferrer"
                    class="text-gray-600 ml-1"
                    // target="_blank"
                  >
                    Privacy Policy
                  </a>
                </Link>{" "}
                //
                <Link href="/terms">
                  <a
                    // href="https://lasvittennis.com/terms"
                    rel="noopener noreferrer"
                    class="text-gray-600 ml-1"
                    // target="_blank"
                  >
                    Website Terms
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
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
