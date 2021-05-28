import ReactPlayer from "react-player/lazy";
import { useLanguage } from "../../hooks/useLanguage";

export function ContentSneakPeek({ content }) {
  // console.log("SneakPeek Items -> ", content);
<<<<<<< HEAD
  const { l } = useLanguage();
  const people = [
    {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      twitterUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      twitterUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      twitterUrl: "#",
      linkedinUrl: "#",
    },
    // More people...
  ];
=======

  const { l } = useLanguage();
>>>>>>> d8f8905db903149cc20bef073f39c1c293b8221d

  return (
    <>
      <div className="bg-white">
<<<<<<< HEAD
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Sneak Peek
              </h2>
              <p className="text-xl text-gray-500">
                Take a look at some of the amazing content available as part of
                this course.
              </p>
            </div>
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
              {content.map((contentItem) => (
                <>
                  {contentItem.contentType === "video" ? (
                    <li key={contentItem.id}>
                      <div className="space-y-4">
                        <div className="aspect-w-3">
                          <div className="player-wrapper">
                            <ReactPlayer
                              controls={true}
                              className="react-player"
                              url={contentItem.fileUrl}
                              width="100%"
                              height="100%"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>{l(contentItem.contentTitle)}</h3>
                            <p className="text-base font-light">
                              {l(contentItem.shortDescription)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </ul>
=======
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
                          <ReactPlayer
                            controls={true}
                            className="mb-4 flex-shrink-0 lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                            url={item.fileUrl}
                            //style="mb-4 flex-shrink-0 lg:w-1/2 w-full lg:h-auto h-64"
                            width="80%"
                            height="80%"
                            light={true} // shows vid thumbnail, load full player on click
                          />
                        </>

                        <div className="w-full">
                          <h2 className="title-font font-medium text-lg text-gray-900">
                            {l(item.contentTitle)}
                          </h2>
                          <p className="mb-4">{l(item.shortDescription)}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
>>>>>>> d8f8905db903149cc20bef073f39c1c293b8221d
          </div>
        </div>
      </div>

<<<<<<< HEAD
      
=======
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
>>>>>>> d8f8905db903149cc20bef073f39c1c293b8221d
    </>
  );
}
