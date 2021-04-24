// https://tailwindui.com/components/marketing/sections/blog-sections#component-720cf60b960fecb99c45f462f24db2d9

import React from "react";
import { Fragment } from "react";
import { urlFor } from "../../utils/sanity";
import Link from "next/link";

export default function blog(props) {
  // console.log("Blog Props // ", props);
  let dt = Date;

  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading2 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {props.sectionData.heading}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {props.sectionData.content}
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-16 lg:grid-cols-3 lg:max-w-none py-4">
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
                    {post.tags ? (
                      <React.Fragment>
                        {post.tags.map((tag) => (
                          <span key={tag.value}>{tag.value + " | "}</span>
                        ))}
                      </React.Fragment>
                    ) : (
                      <React.Fragment></React.Fragment>
                    )}
                  </p>
                  <Link href={post.slug.current}>
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
  );
}
