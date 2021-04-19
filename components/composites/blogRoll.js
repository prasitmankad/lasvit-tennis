// https://tailwindui.com/components/marketing/sections/blog-sections#component-720cf60b960fecb99c45f462f24db2d9

import { urlFor } from "../../utils/sanity";
import Link from "next/link";

export default function blogRoll(props) {
  console.log("Blog Props // ", props);

  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {props.sectionData.heading}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {props.sectionData.content}
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {props.postsData.map((post) => (
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
                  alt={props.mainImage?.alt || ``}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p
                    className={
                      "text-sm font-medium uppercase italic text-" +
                      props.globalData.branding.primaryAccentColor.title
                    }
                  >
                    {post.tags !== undefined ? (
                      <>
                        {post.tags.map((tag) => (
                          <>{tag.value + " | "}</>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}
                  </p>
                  <a href={post.slug.current} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.excerpt}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{post.author.name}</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={post.author.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {post.author.name}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.publishedAt}>
                        {post.publishedAt}
                      </time>
                      <span aria-hidden="true">&middot;</span>
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
  );
}
