import Link from "next/link";
import { urlFor, PortableText } from "../utils/sanity";

function BlogPostCard({ _id, title, mainImage, slug, excerpt }) {
  return (
    <Link href={`/blog/${slug.current}`}>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden0 cursor-pointer">
          <img
            class="h-40 rounded w-full object-cover object-center mb-6"
            src={urlFor(mainImage)
              .auto("format")
              .width(720)
              .height(400)
              .fit("crop")
              .quality(80)}
            alt={mainImage?.alt || `Photo of ${title}`}
          />
          <div class="p-6">
            {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
              {title}
            </h1>
            <p class="leading-relaxed mb-3">
              {excerpt && (
                <PortableText blocks={excerpt?.en} className="text-gray-600" />
              )}
            </p>
            <div class="flex items-center flex-wrap ">
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
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogPostCard;

// OLD
/* 
  <div class="xl:w-1/4 md:w-1/2 p-4">
<div class="bg-gray-100 p-6 rounded-lg">
  <img
    class="h-40 rounded w-full object-cover object-center mb-6"
    src={urlFor(mainImage)
      .auto("format")
      .width(720)
      .height(400)
      .fit("crop")
      .quality(80)}
    alt={mainImage?.alt || `Photo of ${title}`}
  />
  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
    {title}
  </h2>
  <p class="leading-relaxed text-base">{excerpt[0].text}</p>
</div>
</div> 
*/
