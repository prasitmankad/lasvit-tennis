import { useRouter } from "next/router";
import React from "react";
import { urlFor } from "../../utils/sanity";
import { useLanguage } from "../../hooks/useLanguage";

export function CourseCard(props) {
  const router = useRouter();
  const { l } = useLanguage();
  //console.log("CourseCard -> ", props);
  
  return (
    <div
      key={props.course.id}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={() => {
        router.push(`/courses/${props.course.slug.current}`);
      }}
    >
      <div className="flex-shrink-0">
        <img
          src={props.course.mainImage.src.url}
          alt={props.course.mainImage?.alt || ``}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <a className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">
              {l(props.course.title)}
            </p>
            <p className="mt-3 text-base text-gray-500">
              {l(props.course.shortDescription)}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
