import React, { Fragment } from "react";
import { PortableText, urlFor } from "../../utils/sanity";
import Link from "next/link";

export default function post(props) {
  //console.log("post Props // ", props);

  return (
    <>
      <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="custom_heading2 text-center sm:py-5 lg:py-10">
          {props.data.title}
        </h1>
        <blockquote className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl  text-center">
          {props.data.excerpt}
        </blockquote>

        <img
          alt={props.data.mainImage?.alt || `Photo of ${props.data.title}`}
          className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl  object-cover object-center h-full w-full py-10"
          src={urlFor(props.data.mainImage)
            .auto("format")
            .width(1000)
            .height(Math.floor((9 / 16) * 1000))
            .fit("crop")
            .quality(80)}
        />

        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
          {props.data.body && <PortableText blocks={props.data.body} />}
        </div>
      </div>
    </>
  );
}
