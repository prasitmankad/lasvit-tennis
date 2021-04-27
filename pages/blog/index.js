import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
import Error from "next/error";
import Link from "next/link";
import { urlFor } from "../../utils/sanity";

import RenderHeader from "../../components/render/renderHeader";
import RenderFooter from "../../components/render/renderFooter";

function BlogPageContainer(props) {
  //console.log("BlogPageContainer Props // ", allData);
  const { allData, preview } = props;
  const router = useRouter();
  var dt = new Date();

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
    <React.Fragment>
      <RenderHeader data={page.globalData} />
      <div
        className={
          "relative bg-gray-100 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
        }
      >
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading2 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl py-4">
              {page.globalData.businessInfo.title + " Blog"}
            </h2>
            {/* <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              {props.sectionData.content}
            </p> */}
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-16 lg:grid-cols-3 lg:max-w-full py-4">
          {page.pageData.map((post) => (
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
                        page.globalData.branding.primaryAccentColor.title
                      }
                    >
                      {post.tags ? (
                        <React.Fragment>
                          {post.tags.map((tag) => (
                            <React.Fragment key={tag._key}>
                              {tag.value + " | "}
                            </React.Fragment>
                          ))}
                        </React.Fragment>
                      ) : (
                        <React.Fragment></React.Fragment>
                      )}
                    </p>
                    <Link href={`/blog/${post.slug.current}`} prefetch={false}>
                      <a className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {post.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {post.excerpt}
                        </p>
                      </a>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{post.author.name}</span>

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
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.author.name}
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
      <RenderFooter data={page.globalData} />
    </React.Fragment>
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

export default BlogPageContainer;

const query = `{
  'globalData': *[(_type == "globalSettings" && !(_id in path('drafts.**')))][0] {
    businessInfo {
      title, tagline, siteDescription, contact,
        
    },
    branding,
    header {menu [] {...,link-> {slug,title}}},
    footer {signup,columns [] {heading,links[]->}},
    siteSettings{...,homepage->{slug,title}},
	},
  'pageData': *[(_type == "post" && !(_id in path('drafts.**')))] | order(_publishedAt desc) {
    slug, title, author->{image,name}, excerpt, mainImage, publishedAt, tags, body
  }
}`;

