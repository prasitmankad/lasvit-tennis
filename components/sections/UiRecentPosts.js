import { useState } from "react";
import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
import { urlFor } from "../../utils/sanity";

const query = `*[_type == "post" && !(_id in path('drafts.**')) ] {
	_id,
  authors,
  excerpt,
  postImage,
  title
}`;

function UiRecentPosts(props) {
  const { pageData, preview } = props;
  const router = useRouter();

  if (!router.isFallback && !pageData) {
    return <Error statusCode={404} />;
  }

  const { data: config } = usePreviewSubscription(query, {
    initialData: pageData,
    enabled: preview || router.query.preview !== null,
  });

  // console.log("props =>", props);
  return (
    <>
      {/* RECENT BLOG POSTS */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                {pageData.title}
              </h1>
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                LASVIT BLOG
              </h2>
            </div>

            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-wrap -m-12">
                <div className="p-12 md:w-1/4 flex flex-col items-start">
                  <h2 className="sm:text-1xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                    Roof party normcore before they sold out
                  </h2>
                  <p className="leading-relaxed mb-8">
                    Live-edge letterpress cliche, salvia fanny pack humblebrag
                    narwhal portland. VHS man braid palo santo hoodie brunch
                    trust fund. Bitters hashtag waistcoat fashion axe chia
                    unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric.
                    Cray pug you probably haven't heard of them hexagon
                    kickstarter craft beer pork chic.
                  </p>
                  <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                    <a className="text-indigo-500 inline-flex items-center">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
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
                  {/* Author */}
                  {/* <a className="inline-flex items-center"> 
                  
                    <img
                      alt="blog"
                      src="https://dummyimage.com/104x104"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        Holden Caulfield
                      </span>
                      <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                        UI DEVELOPER
                      </span>
                    </span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  var pageData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      pageData,
    },
  };
}

export default UiRecentPosts;
