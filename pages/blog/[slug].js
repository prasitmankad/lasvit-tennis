import Error from "next/error";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
import { urlFor, PortableText } from "../../utils/sanity";
import Link from "next/link";
import ReactPlayer from 'react-player'

const query = groq`{
  'siteData': *[(_type == "siteConfig" && !(_id in path('drafts.**')))][0] {
	title,
  tagline,
  siteDescription,
  mainNavigation,
  footerNavigation,
  frontpage,
  logo
  },
  'mainContent': *[_type == "post" && slug.current == $slug  && !(_id in path('drafts.**'))][0]
}`;

function BlogPostContainer({ postData, preview }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!postData.mainContent?.slug) {
    return <Error statusCode={404} />;
  }

  const { data: post = {} } = usePreviewSubscription(query, {
    params: { slug: postData.mainContent?.slug?.current },
    initialData: postData,
    enabled: preview || router.query.preview !== null,
  });


  {
    /* can't just mash together and pipe everything to render as text as there may be some images, inline icons and other crap coming through on the API response. Therefore have to go through and determin the _type and then pipe correct component -- two main types - block and mainImage, block has further distinction of marks which are html delimieters such as <strong> or <h1> etc. that need to be parsed as well.  */
  }

  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
              <img
                src={urlFor(postData.siteData.logo)
                  .auto("format")
                  .width(125)
                  // .height(400)
                  .fit("crop")
                  .quality(80)}
                alt={
                  postData.siteData.logo?.alt ||
                  `Photo of ${postData.siteData.title}`
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

      <section class="text-gray-600 body-font">
        <div class="lg:w-4/6 mx-auto py-0">
          <div class="container px-5 py-10 mx-auto flex flex-col">
            <div class="rounded-xs h-500 overflow-hidden">
              <div class="text-center mb-20 py-0">
                <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                  {postData.mainContent.title}
                </h1>
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                  {postData.mainContent.excerpt && (
                    <PortableText
                      blocks={postData.mainContent.excerpt}
                      className="text-gray-600"
                    />
                  )}
                </p>
              </div>
              <img
                alt={
                  postData.mainContent.postImage?.alt ||
                  `Photo of ${postData.mainContent.title}`
                }
                class="object-cover object-center h-full w-full"
                src={urlFor(postData.mainContent.postImage)
                  .auto("format")
                  .width(800)
                  .height(Math.floor((9 / 16) * 1000))
                  .fit("crop")
                  .quality(80)}
              />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-4/4 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                {postData.mainContent.body && (
                  <p class="leading-relaxed text-lg mb-4">
                    <PortableText
                      blocks={postData.mainContent.body}
                      className="text-gray-600"
                    />
                  </p>
                )}

               
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="text-gray-600 body-font">
        <div class="bg-gray-100 border-t border-gray-200">
          <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <Link href="/">
              <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                <img
                  src={urlFor(postData.siteData.logo)
                    .auto("format")
                    .width(80)
                    // .height(400)
                    .fit("crop")
                    .quality(80)}
                  alt={
                    postData.siteData.logo?.alt ||
                    `Photo of ${postData.siteData.title}`
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
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const postData = await getClient(preview).fetch(query, {
    slug: params.slug,
  });
  // console.log("postData ->", postData);
  return {
    props: { preview, postData },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export default BlogPostContainer;
