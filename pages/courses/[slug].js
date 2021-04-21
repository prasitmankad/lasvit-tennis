import Error from "next/error";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
import { urlFor, PortableText } from "../../utils/sanity";
import Link from "next/link";

const query = groq`{
  'globalData': *[(_type == "globalSettings" )][0] {
	title,
  tagline,
  siteDescription,
  mainNavigation,
  footerNavigation,
  frontpage,
  logo
  },
  'mainContent': *[_type == "post" && slug.current == $slug][0]
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
    enabled: preview || (router.query.preview !== undefined && router.query.preview !== null)
  });

  // pipe data to const so that preview mode works (see above var)


  return (
    <>
      

      <section className="text-gray-600 body-font">
        <div className="lg:w-4/6 mx-auto py-0">
          <div className="container px-5 py-10 mx-auto flex flex-col">
            <div className="rounded-xs h-500 overflow-hidden">
              <div className="text-center mb-20 py-0">
                <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                  {post.mainContent.title}
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                  {post.mainContent.excerpt && (
                    <PortableText
                      blocks={post.mainContent.excerpt}
                      className="text-gray-600"
                    />
                  )}
                </p>
              </div>
              <img
                alt={
                  post.mainContent.postImage?.alt ||
                  `Photo of ${post.mainContent.title}`
                }
                className="object-cover object-center h-full w-full"
                src={urlFor(post.mainContent.postImage)
                  .auto("format")
                  .width(800)
                  .height(Math.floor((9 / 16) * 1000))
                  .fit("crop")
                  .quality(80)}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-4/4 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                {post.mainContent.body && (
                  <p className="leading-relaxed text-lg mb-4">
                    <PortableText
                      blocks={post.mainContent.body}
                      className="text-gray-600"
                    />
                  </p>
                )}

               
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-gray-600 body-font">
        <div className="bg-gray-100 border-t border-gray-200">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <Link href="/">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                <img
                  src={urlFor(post.globalData.logo)
                    .auto("format")
                    .width(80)
                    // .height(400)
                    .fit("crop")
                    .quality(80)}
                  alt={
                    post.globalData.logo?.alt ||
                    `Photo of ${post.globalData.title}`
                  }
                />
              </a>
            </Link>

            <p className="text-sm text-gray-600 sm:ml-6 sm:mt-0 mt-4">
              © 2021 Lasvit Tennis. All rights reserved.
            </p>

            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              <Link href="/privacy">
                <a
                  // href="/privacy"
                  rel="noopener noreferrer"
                  className="text-gray-600 ml-1"
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
                  className="text-gray-600 ml-1"
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
