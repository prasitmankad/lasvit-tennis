import { useRouter } from "next/router";
import React from "react";
import { urlFor } from "../../utils/sanity";

export function CourseBanner({ course }) {
  //console.log("CourseBanner -> ", course);

  return (
    <React.Fragment>
      <div className="bg-gray-50">
        <div className="relative overflow-hidden">
          <div className="relative pt-6 pb-16 sm:pb-24 content-center">
            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
              <div className="text-center grid justify-items-center">
                <img
                  className="self-auto"
                  src={urlFor(course.mainImage)
                    .auto("format")
                    .width(300)
                    // .height(400)
                    .fit("crop")}
                  alt={course.mainImage?.alt || ``}
                />
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">{course.title}</span>
                  {/* <span className="block text-indigo-600">online business</span> */}
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  {course.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
