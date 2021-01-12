import { useState } from "react";
import { urlFor, PortableText, getClient } from "../utils/sanity";

function BlogPostPage(props) {

  const { title, mainImage, authors, body } = props;
  return (
    <>
      {/* SECTION 1 Blog Post */}
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
          <img
            alt={mainImage?.alt || `Photo of ${title}`}
            class="object-cover object-center h-full w-full"
            src={urlFor(mainImage)
              .auto("format")
              .width(1200)
              .height(600)
              .fit("crop")
              .quality(80)}
          />

          <div class="text-center lg:w-5/6 w-full">
            <div class="sm:w-4/4 sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0 text-left sm:text-left">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {title}
              </h1>
              <p class="leading-relaxed text-lg mb-4">
                {body && (
                  <PortableText blocks={body?.en} className="text-gray-600" />
                )}
              </p>
              {/* <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-left sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-sm w-20 h-20 object-cover object-center sm:mb-0 mb-4"
                  src="https://dummyimage.com/200x200"
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Holden Caulfield
                  </h2>
                  <h3 class="text-gray-500 mb-3">UI Developer</h3>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPostPage;
