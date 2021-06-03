// https://tailwindui.com/components/marketing/elements/banners#component-1a63aa510db7761c581486c7259487e8

import React from "react";
import { Fragment } from "react";

import { urlFor } from "../../utils/sanity";
import Link from "next/link";

import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";
import { useLanguage } from "../../hooks/useLanguage";

export default function siteNotice(props) {
  //console.log("SiteNotice Props // ", props);
  const { l } = useLanguage();

  return (
    <React.Fragment>
      <div className={"bg-" + props.sectionData.backgroundColor.title}>
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span
                className={
                  "flex p-2 rounded-lg bg-" +
                  props.sectionData.backgroundColor.title
                }
              >
                <SpeakerphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 font-medium text-white">
                <span className="md:hidden">
                  {l(props.sectionData.messageText)}
                </span>
                <span className="hidden md:inline">
                  {l(props.sectionData.messageText)}
                </span>
              </p>
            </div>
            {props.sectionData.link.link && (
              <>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                  <Link href={props.sectionData.link.link.slug.current}>
                    <a
                      className={
                        "flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-" +
                        props.globalData.branding.primaryAccentColor.title +
                        " bg-white hover:bg-gray-light"
                      }
                    >
                      {l(props.sectionData.link.text)}
                    </a>
                  </Link>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                  <button
                    type="button"
                    href={props.sectionData.link.link.slug.current}
                    className={
                      "-mr-1 flex p-2 rounded-md hover:bg-" +
                      props.globalData.branding.secondaryAccentColor.title +
                      " focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                    }
                  >
                    {/* <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                  </button>
                </div>
              </>
            )}
            
            {props.sectionData.link.internalRoute && (
              <>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                  <Link href={props.sectionData.link.internalRoute}>
                    <a
                      className={
                        "flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-" +
                        props.globalData.branding.primaryAccentColor.title +
                        " bg-white hover:bg-gray-light"
                      }
                    >
                      {l(props.sectionData.link.text)}
                    </a>
                  </Link>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                  <button
                    type="button"
                    href={props.sectionData.link.internalRoute}
                    className={
                      "-mr-1 flex p-2 rounded-md hover:bg-" +
                      props.globalData.branding.secondaryAccentColor.title +
                      " focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                    }
                  >
                    {/* <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
