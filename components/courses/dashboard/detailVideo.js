import React from "react";
import { useLanguage } from "../../../hooks/useLanguage";
import ReactPlayer from "react-player/lazy";

export function Video({ video }) {
  const { l } = useLanguage();

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <ReactPlayer
            controls={true}
            url={video.fileUrl}
            width="100%"
            height="100%"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h3 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading2">
              {l(video.contentTitle)}
            </h3>
            <p className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_p leading-relaxed">
              {l(video.shortDescription)}
            </p>
            {/* TODO: Fix long description / show notes being pulled across as translated Portable Text. */}
          </div>
        </div>
      </section>
    </>
  );
}
