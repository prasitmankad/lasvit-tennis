import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
import { PortableText, urlFor } from "../../utils/sanity";
import Link from "next/link";

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
'mainContent': *[_type == "post" && defined(slug.current) && !(_id in path('drafts.**'))]
}`;

function BlogPageContainer({ postsData, preview }) {
  const router = useRouter();
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!postsData) {
    return <Error statusCode={404} />;
  }

  // console.log(postsData);
  const { data: posts } = usePreviewSubscription(query, {
    initialData: postsData,
    enabled: preview || router.query.preview !== null,
  });

  return (
    <>
      <div className="bg-white">
        <header class="text-gray-600 body-font">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href="/">
              <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                <img
                  src={urlFor(postsData.siteData.logo)
                    .auto("format")
                    .width(125)
                    // .height(400)
                    .fit("crop")
                    .quality(80)}
                  alt={
                    postsData.siteData.logo?.alt ||
                    `Photo of ${postsData.siteData.title}`
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
          <div class="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
            <div class="text-center lg:w-2/3 w-full">
              <h1 class="title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900">
                Lasvit Blog
              </h1>
            </div>
          </div>

          <>
            <div class="flex flex-wrap -m-4">
              {postsData.mainContent.map((post) => (
                <>
                  <div class="p-4 md:w-1/3">
                    <div class="container px-5 py-10 mx-auto">
                      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          src={urlFor(post.postImage)
                            .auto("format")
                            .width(720)
                            .height(600)
                            .fit("crop")
                            .quality(80)
                            .url()}
                          alt={
                            post.postImage?.alt ||
                            `Photo of ${post.postImage.caption}`
                          }
                          class="lg:h-48 md:h-36 w-full object-cover object-center"
                        />
                        <div class="p-6">
                          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                            {post.title}
                          </h1>
                          <p class="leading-relaxed mb-3">
                            {post.excerpt && (
                              <PortableText
                                blocks={post.excerpt}
                                className="text-gray-700"
                              />
                            )}
                          </p>
                          <div class="flex items-center flex-wrap ">
                            <Link href={`/blog/${post.slug.current}`}>
                              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                Read More
                                <svg
                                  class="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        </section>

        <footer class="text-gray-600 body-font">
          <div class="bg-gray-100 border-t border-gray-200">
            <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
              <Link href="/">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                  <img
                    src={urlFor(postsData.siteData.logo)
                      .auto("format")
                      .width(80)
                      // .height(400)
                      .fit("crop")
                      .quality(80)}
                    alt={
                      postsData.siteData.logo?.alt ||
                      `Photo of ${postsData.siteData.title}`
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
  const postsData = await getClient(preview).fetch(query);
  // console.log("Query =>", query);
  return {
    props: { preview, postsData },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

export default BlogPageContainer;