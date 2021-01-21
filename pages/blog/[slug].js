import Error from "next/error";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
import { PortableText, urlFor } from "../../utils/sanity";
import Link from "next/link";

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
  console.log("postData ->", postData);

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
      {/* SECTION 1 Blog Post */}
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
          <img
            alt={postData.mainContent.postImage?.alt || `Photo of ${postData.mainContent.title}`}
            class="object-cover object-center h-full w-full"
            src={urlFor(postData.mainContent.postImage)
              .auto("format")
              .width(1200)
              .height(400)
              .fit("crop")
              .quality(80)}
          />

          <div class="text-center lg:w-5/6 w-full">
            <div class="sm:w-4/4 sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0 text-left sm:text-left">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {postData.mainContent.title}
              </h1>
              <p class="leading-relaxed text-lg mb-4">
                {postData.mainContent.body && (
                  <PortableText blocks={postData.mainContent.body} className="text-gray-600" />
                )}
              </p>
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