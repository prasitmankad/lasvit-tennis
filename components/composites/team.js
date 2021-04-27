import React, { Fragment } from "react";
import { urlFor } from "../../utils/sanity";
import Link from "next/link";

function teamSection(props) {
  // console.log("teamSection props // ", props);

  return (
    <React.Fragment>
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                {props.sectionData.heading}
              </h2>
              <p className="text-xl text-gray-500">
                {props.sectionData.content}
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
                {props.sectionData.team?.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2">
                        <img
                          className="object-cover shadow-lg rounded-lg"
                          src={urlFor(person.image)
                            .auto("format")
                            .width(256)
                            .height(256)
                            .fit("crop")
                            .quality(80)}
                          alt={person.image?.alt || ``}
                        />
                      </div>
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p
                          className={
                            "text-" +
                            props.globalData.branding.primaryAccentColor.title
                          }
                        >
                          {person.position}
                        </p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">
                          {person.shortDescription}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default teamSection;
