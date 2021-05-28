import ReactPlayer from "react-player/lazy";
import { useLanguage } from "../../hooks/useLanguage";

export function ContentSneakPeek({ content }) {
  // console.log("SneakPeek Items -> ", content);
  const { l } = useLanguage();
 

  return (
    <>
      <div className="bg-white">
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
          </div>
        </div>
      </div>

      
    </>
  );
}
