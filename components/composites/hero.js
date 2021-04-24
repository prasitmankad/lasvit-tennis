import React from "react";
import { Fragment } from "react";
import { urlFor } from "../../utils/sanity";
import Link from "next/link";
import { Popover } from "@headlessui/react";

export default function hero(props) {
  // console.log("Hero Props // ", props);

  return (
    <React.Fragment>
      <Popover className="relative bg-white overflow-hidden">
        {({ open }) => (
          <React.Fragment>
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg
                  className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <h1 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_title">
                      {/* <span className="block > */}
                        {props.sectionData.heading}
                      {/* </span>{" "} */}
                    </h1>
                    <h2
                      className={
                        "custom_subtitle text-" +
                        props.globalData.branding.primaryAccentColor.title
                      }
                    >
                      {props.sectionData.subheading}
                    </h2>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      {props.sectionData.content}
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      {props.sectionData.buttons?.map((button) => (
                        <div
                          key={button.buttonText}
                          className="rounded-md shadow mt-3 sm:mt-0 sm:ml-3"
                        >
                          <Link href={"/" + button.links.route.slug.current}>
                            <a
                              className={
                                "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-" +
                                props.globalData.branding.primaryAccentColor
                                  .title +
                                " hover:bg-white hover:border-" +
                                props.globalData.branding.primaryAccentColor
                                  .title +
                                " hover:text-" +
                                props.globalData.branding.primaryAccentColor
                                  .title +
                                " md:py-4 md:text-lg md:px-10"
                              }
                            >
                              {button.buttonText}
                            </a>
                          </Link>
                        </div>
                      ))}
 
                     
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src={urlFor(props.sectionData.mainImage)
                  .auto("format")
                  //.width(120)
                  .height(1000)
                  .fit("crop")
                  .quality(80)}
                alt={props.mainImage?.alt || ``}
              />
            </div>
          </React.Fragment>
        )}
      </Popover>
    </React.Fragment>
  );
}
