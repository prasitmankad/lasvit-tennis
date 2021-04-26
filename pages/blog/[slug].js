import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
import { urlFor, PortableText } from "../../utils/sanity";
import Link from "next/link";
import Error from "next/error";

import RenderHeader from "../../components/render/renderHeader";
import RenderFooter from "../../components/render/renderFooter";

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
  'pageData': *[(_type == "post" && defined(slug.current) && !(_id in path('drafts.**')))][0] {
    _id,
    author,
    excerpt,
    mainImage,
    publishedAt,
    slug,
    tags,
    title,
  }
}`;

function BlogPostContainer({ allData, preview, slug }) {
  const router = useRouter();
  console.log("BlogPostContainer Props // ", allData);

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!allData.mainContent?.slug) {
    return <Error statusCode={404} />;
  }

  const { data: post = {} } = usePreviewSubscription(query, {
    params: { slug },
    initialData: allData,
    enabled:
      preview ||
      (router.query.preview !== undefined && router.query.preview !== null),
  });

  return (
    <React.Fragment>
      {/* HEADER */}
      <RenderHeader data={allData.globalData} />
      {/* MAIN CONTENT */}
      {/* <section className="text-gray-600 body-font">
        <div className="lg:w-4/6 mx-auto py-0">
          <div className="container px-5 py-10 mx-auto flex flex-col">
            <div className="rounded-xs h-500 overflow-hidden">
              <div className="text-center mb-20 py-0">
                <h1 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading1 text-gray-900">
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
      </section> */}
      {/* FOOTER */}
      <RenderFooter data={allData.globalData} />
    </React.Fragment>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const { slug } = params;
  var allData = await getClient(preview).fetch(query, { slug });

  return {
    props: { preview, allData, slug },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

export async function getStaticPaths() {
  var routes = await getClient().fetch(
    `*[_type == "post" && defined(slug.current)]{"params": {"slug": slug.current}}`
  );
  return {
    paths: routes || null,
    fallback: true,
  };
}

export default BlogPostContainer;
