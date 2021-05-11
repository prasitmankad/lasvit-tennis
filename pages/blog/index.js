import React from "react";
import { useRouter } from "next/router";
import { sanityClient } from "../../utils/sanity";
import Error from "next/error";
import Link from "next/link";
import { urlFor } from "../../utils/sanity";
import RenderHeader from "../../components/render/renderHeader";
import RenderFooter from "../../components/render/renderFooter";
import { postCollection } from "../../modules/groq/post";

export async function getStaticProps({ params = {}, preview = false }) {
  var pageData = await sanityClient.fetch(postCollection);

  return {
    props: { preview, pageData },
    revalidate: 1,
  };
}

function BlogPageContainer({ pageData, preview }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!pageData) {
    return <Error statusCode={404} />;
  }

  var dt = new Date();

  // TODO move to Excerpt component
  const renderExcerpt = (data) => {
    if (typeof data === "string") {
      return data;
    } else return data?.[0]?.children?.[0]?.text;
  };

  return (
    <>
      <RenderHeader data={pageData.globalData} />
      <div
        className={
          "relative bg-gray-100 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
        }
      >
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading2 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl py-4">
              {pageData.globalData.businessInfo.title + " Blog"}
            </h2>
            {/* <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              {props.sectionData.content}
            </p> */}
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-16 lg:grid-cols-3 lg:max-w-full py-4">
            {pageData.pageData.map((post) => (
              <div
                key={post.title}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    src={urlFor(post.mainImage)
                      .auto("format")
                      .width(500)
                      .height(400)
                      .fit("scale")
                      .quality(80)}
                    alt={post.mainImage?.alt || ``}
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p
                      className={
                        "text-sm font-medium uppercase italic text-" +
                        pageData.globalData.branding.primaryAccentColor.title
                      }
                    >
                      {post.tags ? (
                        <>
                          {post.tags.map((tag) => (
                            <div>{tag.value + " | "}</div>
                          ))}
                        </>
                      ) : null}
                    </p>
                    <Link href={`/blog/${post.slug.current}`}>
                      <a className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {post.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {renderExcerpt(post.excerpt)}
                        </p>
                      </a>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">
                        {post?.author?.name || ""}
                      </span>
                      {post?.author?.image && (
                        <img
                          className="h-10 w-10 rounded-full"
                          src={urlFor(post.author.image)
                            .auto("format")
                            //.width(10)
                            //.height(10)
                            .fit("scale")
                            .quality(80)}
                          alt={post.mainImage?.alt || ``}
                        />
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post?.author?.name || ""}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        {(dt = new Date(post.publishedAt).toLocaleDateString())}
                        {/* <span>{post.readingTime} read</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RenderFooter data={pageData.globalData} />
    </>
  );
}

export default BlogPageContainer;
