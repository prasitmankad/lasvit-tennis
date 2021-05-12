import React from "react";
import { urlFor, PortableText } from "../../utils/sanity";

export function BlogDetail({ post }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="lg:w-4/6 mx-auto py-0">
        <div className="container px-5 py-10 mx-auto flex flex-col">
          <div className="rounded-xs h-500 overflow-hidden">
            <div className="text-center mb-20 py-0">
              <h1 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading1 text-gray-900">
                {post.title}
              </h1>

              <p className="text-base text-gray-600 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                {post.excerpt}
              </p>
            </div>
            {
              post.mainImage && (
                <img
                  alt={post.mainImage?.alt || `Photo of ${post.title}`}
                  className="object-cover object-center h-full w-full"
                  src={urlFor(post.mainImage.url.url)
                    .auto("format")
                    .width(800)
                    .height(Math.floor((9 / 16) * 1000))
                    .fit("crop")
                    .quality(80)}
                />
              )
            }

          </div>

          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-4/4 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              {post.body && (
                <p className="leading-relaxed text-lg mb-4">
                  <PortableText blocks={post.body} className="text-gray-600" />
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
