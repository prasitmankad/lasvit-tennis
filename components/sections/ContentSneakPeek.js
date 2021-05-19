import ReactPlayer from "react-player/lazy";

export function ContentSneakPeek({ content }) {
  console.log("SneakPeek Items -> ", content);
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
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4">
              {content.map((item) => (
                <>
                  {item.contentType === "video" && (
                    <div className="p-4 lg:w-1/4 md:w-1/2">
                      <div className="h-full flex flex-col items-center text-center">
                        <>
                          <div className="player-wrapper">
                            <ReactPlayer
                              className="react-player"
                              url={item.fileUrl}
                              //style="mb-4 flex-shrink-0 lg:w-1/2 w-full lg:h-auto h-64"
                              width="100%"
                              height="100%"
                              light={true} // shows vid thumbnail, load full player on click
                            />
                          </div>
                        </>

                        <div className="w-full">
                          <h2 className="title-font font-medium text-lg text-gray-900">
                            {item.contentTitle}
                          </h2>
                          <p className="mb-4">{item.shortDescription}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-16 mx-16">
        <div className="mx-16 my-4">
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {items.map((item) => (
              <li key={item.fileUrl} className="relative">
                <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                  {item.contentType === "video" && (
                    <ReactPlayer
                      className="object-cover group-hover:opacity-75"
                      url={item.fileUrl}
                      width="auto"
                      height="auto"
                    />
                  )}

                  {item.contentType !== "video" && (
                    <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                      // TODO
                    </div>
                  )}
                </div>
                <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                  {item.contentTitle}
                </p>
                <p className="inline-block bg-grey-lighter rounded-full text-sm text-gray-500 font-semibold text-grey-darker mr-2">
                  {item.shortDescription}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </>
  );
}
