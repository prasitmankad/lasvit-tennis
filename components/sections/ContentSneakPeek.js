import ReactPlayer from "react-player/lazy";
import { useLanguage } from "../../hooks/useLanguage";

export function ContentSneakPeek({ content }) {
  // console.log("SneakPeek Items -> ", content);
  const { l } = useLanguage();

  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Sneak Peek
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Take a look at some of the amazing content available as part of
              this course.
            </p>
          </div>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {/* CONTAINER */}
                {content.map((contentItem) => (
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
