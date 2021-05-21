import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import ReactPlayer from "react-player/lazy";

const messages = [
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  // More messages...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function CourseDashboard({ course, globalData }) {
  console.log("Course Data -> ", course);
  //console.log("Course pageData -> ", globalData);

  const { l } = useLanguage();

  return (
    <>
      {/* Course Header */}
      <div>
        <div className="relative overflow-hidden ">
          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-6 sm:px-6">
            <div className="pb-5 border-b border-gray-200">
              <h1 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading2 text-gray-900">
                {l(course.title)}
              </h1>
              <p className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mt-2 max-w-4xl text-gray-500">
                {l(course.shortDescription)}
              </p>
            </div>
          </div>
          {/* REPEATING MODULES */}
          {course.modules.map((module) => (
            <><div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
              <div className="flex">
                <h2 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl flex-1 custom_heading3 font-bold text-gray-900">
                  {l(module.title)}
                </h2>
              </div></div>
              {/* VIDEOS */}
              <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex">
                  <h3 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl flex-1 custom_heading4 font-bold text-gray-900">
                    Videos
                  </h3>
                </div>
              </div>
              {module.items.map((contentItem) => (
                <>
                  {contentItem.contentType === "video" && (
                    <>
                      <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 sm:py-10 lg:py-10 mx-auto">
                          <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
                              {/* TODO: Different player sizes for Youtube & Vimeo */}
                              <ReactPlayer
                                controls={true}
                                url={contentItem.fileUrl}
                                width="100%"
                                height="100%"
                              />
                            </div>
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                              <h1 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading4 mb-1">
                                {l(contentItem.contentTitle)}{" "}
                              </h1>

                              <p className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl leading-relaxed">
                                {l(contentItem.shortDescription)}
                                {/* TODO: Fix long description / show notes being pulled across as translated Portable Text.
                                
                                {console.log("longdescription ", contentItem.longDescription)} */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </section>
                      <br />
                    </>
                  )}
                </>
              ))}
              {/* ARTICLES */}
              <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex">
                  <h3 className="flex-1 prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading4 font-bold text-gray-900">
                    Articles
                  </h3>
                </div>
              </div>
              {module.items.map((contentItem) => (
                <>
                  {contentItem.contentType === "article" && (
                    <>
                      <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 sm:py-5 lg:py-0 mx-auto">
                          <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <ul className="divide-y divide-gray-200">
                              {messages.map((message) => (
                                <li
                                  key={message.id}
                                  className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                                >
                                  <div className="flex justify-between space-x-3">
                                    <div className="min-w-0 flex-1">
                                      <a
                                        href="#"
                                        className="block focus:outline-none"
                                      >
                                        <span
                                          className="absolute inset-0"
                                          aria-hidden="true"
                                        />
                                        <p className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl  font-medium text-gray-900 truncate">
                                          {message.sender}
                                        </p>
                                        <p className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl  text-gray-500 truncate">
                                          {message.subject}
                                        </p>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="mt-1">
                                    <p className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl line-clamp-2 text-gray-600">
                                      {message.preview}
                                    </p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </section>
                      <br />
                    </>
                  )}
                </>
              ))}
              {/* FILES */}
              <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex">
                  <h3 className="flex-1 prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading4 font-bold text-gray-900">
                    Files
                  </h3>
                </div>
              </div>

              {module.items.map((contentItem) => (
                <>
                  {contentItem.contentType === "file" && (
                    <>
                      <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 sm:py-5 lg:py-0 mx-auto">
                          <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            
                          </div>
                        </div>
                      </section>
                      <br />
                    </>
                  )}
                </>
              ))}
            </>
          ))}

        </div>
      </div>

    </>
  );
}
