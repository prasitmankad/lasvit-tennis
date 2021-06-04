import Link from "next/link";
import { urlFor } from "../../../utils/sanity";
import { useLanguage } from "../../../hooks/useLanguage";

import { Fragment, useState, useEffect } from "react";
import { Disclosure, Dialog, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon } from "@heroicons/react/solid";

// useEffect(() => {});

export function Course({ courseInfo, globalData }) {
  // console.log("courseInfo -> ", courseInfo);
  const { l } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState({
    currentModuleName: courseInfo.modules[0].title,
    currentContentType: "video",
    contentItems: courseInfo.modules[0].items.filter(
      (x) => x.contentType === "video"
    ), // for middle panel list
    contentItem: courseInfo.modules[0].items[0], // for currently shown content
  });
  //console.log("data -> ", data);

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      {/* MOBILE MENU inc animations aka Transitions */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 lg:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <Link href="/">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                      <img
                        src={urlFor(globalData.branding.companyLogo)
                          .auto("format")
                          .width(80)
                          // .height(400)
                          .fit("crop")
                          .quality(100)}
                        alt={globalData.branding.companyLogo?.alt || ``}
                      />
                    </a>
                  </Link>
                </div>
                <div className="px-5 pt-0 pb-2">
                  <h2 className="lg:custom_heading4  sm:custom_heading6 md:custom_heading6 text-gray-900">
                    {l(courseInfo.title)}
                  </h2>
                </div>
                <div className="mt-5 flex-grow flex flex-col">
                  <nav>
                    {courseInfo.modules.map((module) =>
                      !module.items ? (
                        <div key={module.id}>
                          <a
                            onClick={() =>
                              setData({
                                ...data,
                                currentModuleName: module.title,
                                currentContentType: "video",
                                contentItems: module.items.filter(
                                  (x) => x.contentType === "video"
                                ),
                                //contentItem: data.contentItem[0],
                              })
                            }
                            className={classNames(
                              module.current
                                ? "bg-white gray-dark"
                                : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                              "group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md"
                            )}
                          >
                            {l(module.title)}
                          </a>
                        </div>
                      ) : (
                        <Disclosure
                          // onClick={() =>
                          //   setData({
                          //     ...data,
                          //     currentModuleName: module.title,
                          //     currentContentType: "video",
                          //     contentItems: module.items.filter(
                          //       (x) => x.contentType === "video"
                          //     ),
                          //     //contentItem: data.contentItem[0],
                          //   })
                          // }
                          as="div"
                          key={module.id}
                          className="space-y-1"
                        >
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={classNames(
                                  module.current
                                    ? "bg-white gray-dark"
                                    : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                  "group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-dark"
                                )}
                              >
                                <svg
                                  className={classNames(
                                    open
                                      ? "text-gray-400 rotate-90"
                                      : "text-gray-300",
                                    "mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                                  )}
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M6 6L14 10L6 14V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                                {l(module.title)}
                              </Disclosure.Button>
                              <Disclosure.Panel className="space-y-1 cursor-pointer">
                                {[
                                  ...new Set(
                                    module.items.map((x) => x.contentType)
                                  ),
                                ].map((subItem) => (
                                  <a
                                    key={subItem.id}
                                    onClick={() => {
                                      setData({
                                        ...data,
                                        currentContentType: subItem,
                                      });
                                      // console.log(
                                      //   "(desktop) subitem-> ",
                                      //   subItem
                                      // );

                                      setData({
                                        ...data,
                                        currentModuleName: module.title,
                                      });
                                      // console.log(
                                      //   "(desktop) module-> ",
                                      //   module.title
                                      // );
                                    }}
                                    className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                  >
                                    {l(
                                      subItem.charAt(0).toUpperCase() +
                                        subItem.slice(1) +
                                        "s"
                                    )}
                                  </a>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      )
                    )}
                  </nav>
                </div>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* STATIC SIDEBARD FOR DESKTOP */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-gray-100">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Link href="/">
                  <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                    <img
                      src={urlFor(globalData.branding.companyLogo)
                        .auto("format")
                        .width(80)
                        // .height(400)
                        .fit("crop")
                        .quality(100)}
                      alt={globalData.branding.companyLogo?.alt || ``}
                    />
                  </a>
                </Link>
              </div>
              <div className="px-5 pt-0 pb-2">
                <h2 className="lg:custom_heading5  sm:custom_heading6 md:custom_heading6 text-gray-900">
                  {l(courseInfo.title)}
                </h2>
              </div>
              <div className="mt-5 flex-grow flex flex-col">
                <nav
                  className="flex-1 px-2 space-y-1 bg-white"
                  aria-label="Sidebar"
                >
                  {courseInfo.modules.map((module) =>
                    !module.items ? (
                      <div key={module.id}>
                        <a
                          href={module.href}
                          className={classNames(
                            module.current
                              ? "bg-white gray-dark"
                              : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                            "group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md"
                          )}
                        >
                          {l(module.title)}
                        </a>
                      </div>
                    ) : (
                      <Disclosure
                        // onClick={() =>
                        //   setData({
                        //     ...data,
                        //     currentModuleName: module.title,
                        //     currentContentType: "video",
                        //     contentItems: module.items.filter(
                        //       (x) => x.contentType === "video"
                        //     ),
                        //     //contentItem: data.contentItem,
                        //   })
                        // }
                        as="div"
                        key={module.id}
                        className="space-y-1"
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                module.current
                                  ? "bg-white gray-dark"
                                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                "group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-dark"
                              )}
                            >
                              <svg
                                className={classNames(
                                  open
                                    ? "text-gray-400 rotate-90"
                                    : "text-gray-300",
                                  "mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                                )}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  d="M6 6L14 10L6 14V6Z"
                                  fill="currentColor"
                                />
                              </svg>
                              {l(module.title)}
                            </Disclosure.Button>
                            <Disclosure.Panel className="space-y-1 cursor-pointer">
                              {[
                                ...new Set(
                                  module.items.map((x) => x.contentType)
                                ),
                              ].map((subItem) => (
                                <a
                                  key={subItem.id}
                                  onClick={() => {
                                    setData({
                                      ...data,
                                      currentModuleName: module.title,
                                      currentContentType: subItem,
                                      contentItems: module.items.filter(
                                        (x) => x.contentType === subItem
                                      ),
                                      //contentItem: data.contentItem,
                                    });
                                    // console.log("(subitem-> ", subItem);
                                    // console.log(
                                    //   "(module -> ",
                                    //   l(module.title)[0]
                                    // );
                                    // console.log(
                                    //   "(contentitems-> ",
                                    //   data.contentItems
                                    // );
                                  }}
                                  className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                >
                                  {l(
                                    subItem.charAt(0).toUpperCase() +
                                      subItem.slice(1) +
                                      "s"
                                  )}
                                </a>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )
                  )}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        {/* MOBILE HEADER TO OPEN MENU */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
            <div className="pt-3 pb-0">
              <Link href="/">
                <a className="h-8 w-auto flex title-font font-medium items-center text-gray-900 md:mb-0 cursor-pointer">
                  <img
                    src={urlFor(globalData.branding.companyLogo)
                      .auto("format")
                      .width(80)
                      // .height(400)
                      .fit("crop")
                      .quality(100)}
                    alt={globalData.branding.companyLogo?.alt || ``}
                  />
                </a>
              </Link>
              <div className="px-1 pt-2 pb-2">
                <h2 className="font-medium lg:custom_heading5 sm:custom_heading6 md:custom_heading6 text-gray-900">
                  {l(courseInfo.title)}
                </h2>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 relative z-0 flex overflow-hidden">
          {/* 

          MIDDLE PANEL
        
          */}
          <aside className="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
            <div className="px-6 pt-6 pb-4">
              <h2 className="lg:custom_heading5 sm:custom_heading6 md:custom_heading6 text-gray-900">
                Module: {l(data.ModuleName)}
              </h2>
              {/* description too long -- removed */}
              {/* <p className="mt-1 text-sm text-gray-600">{data.moduleDescription}</p> */}
            </div>

            {data.ContentType === "video" ? (
              <>
                <ul className="divide-y divide-gray-200">
                  {data.contentItems
                    .filter((x) => x.contentType === "video")
                    .map((video) => (
                      <li
                        // onClick set the contentItem so the video component updates
                        onClick={() => {
                          setData({
                            ...data,
                            contentItem: video,
                          });
                        }}
                        key={video.id}
                        className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-dark"
                      >
                        <div className="flex justify-between space-x-3">
                          <div className="min-w-0 flex-1">
                            <a className="block focus:outline-none">
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              />
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {l(video.contentTitle)}
                              </p>
                            </a>
                          </div>
                        </div>
                        <div className="mt-1">
                          <p className="line-clamp-2 text-sm text-gray-600">
                            {l(video.shortDescription)}
                          </p>
                        </div>
                      </li>
                    ))}
                </ul>
              </>
            ) : (
              <>
                {data.ContentType === "article" ? (
                  <>
                    <ul className="divide-y divide-gray-200">
                      {data.contentItems
                        .filter((x) => x.contentType === "article")
                        .map((article) => (
                          <li
                            key={article.id}
                            className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-dark"
                          >
                            <div className="flex justify-between space-x-3">
                              <div className="min-w-0 flex-1">
                                <a className="block focus:outline-none">
                                  <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                  />
                                  <p className="text-sm font-medium text-gray-900 truncate">
                                    {l(article.contentTitle)}
                                  </p>
                                </a>
                              </div>
                            </div>
                            <div className="mt-1">
                              <p className="line-clamp-2 text-sm text-gray-600">
                                {l(article.shortDescription)}
                              </p>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </>
                ) : (
                  <>
                    {data.ContentType === "file" ? (
                      <>
                        <FileList files={data.contentItems} />
                        <ul className="divide-y divide-gray-200">
                          {data.contentItems
                            .filter((x) => x.contentType === "file")
                            .map((file) => (
                              <>
                                <li
                                  key={file.id}
                                  className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-dark"
                                >
                                  <div className="flex justify-between space-x-3">
                                    <div className="min-w-0 flex-1">
                                      <a className="block focus:outline-none">
                                        <span
                                          className="absolute inset-0"
                                          aria-hidden="true"
                                        />
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                          {l(file.contentTitle)}
                                        </p>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="mt-1">
                                    <p className="line-clamp-2 text-sm text-gray-600">
                                      {l(file.shortDescription)}
                                    </p>
                                  </div>
                                </li>
                              </>
                            ))}
                        </ul>
                      </>
                    ) : (
                      <>
                        {/* {some other content types to be defined in the future} */}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </aside>

          {/* 

          MAIN SECTION
        
          */}
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            {/* Breadcrumb Navigation on Mobile*/}
            <nav
              className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
              aria-label="Breadcrumb"
            >
              <a
                href="#"
                className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
              >
                <ChevronLeftIcon
                  className="-ml-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>Back to List</span>
              </a>
            </nav>
            {/* Detailed Content for a selected Video, Article or File */}
            <article>
              <div className="px-6 lg:pt-6 pb-4 sm:pt-0 md:pt-0">
                <h2 className="lg:custom_heading5  sm:custom_heading6 md:custom_heading6 text-gray-900">
                  Module: {l(data.ModuleName)}
                </h2>
              </div>
              {data.ContentType === "video" ? (
                <>
                  <section className=" body-font">
                    <div className="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
                      <div className="text-center lg:w-5/6 w-full">
                        <div className="player-wrapper">
                          <ReactPlayer
                            controls={true}
                            className="react-player"
                            //url= "https://vimeo.com/551327613"
                            url={video.fileUrl}
                            width="100%"
                            height="100%"
                          />
                        </div>

                        <div className="lg:flex-grow md:w-2/2 lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left items-left text-left">
                          <h1 className="custom_heading4 mb-4 font-medium text-gray-900">
                            {l(video.contentTitle)}
                          </h1>
                          <p className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mb-8 leading-relaxed">
                            {l(video.shortDescription)}
                          </p>
                        </div>
                        <div className="lg:flex-grow md:w-2/2 lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left items-left text-left">
                          {video.longDescription && (
                            <>
                              {l(video.longDescription).map((body) => (
                                <PortableText
                                  blocks={body}
                                  className="text-gray-600"
                                />
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                </>
              ) : (
                <>
                  {data.ContentType === "article" ? (
                    <>
                      <div className="lg:w-4/6 mx-auto py-0">
                        <div className="container px-5 py-10 mx-auto flex flex-col">
                          <div className="rounded-xs h-500 overflow-hidden">
                            <div className="text-center mb-20 py-0">
                              <h1 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading1 text-gray-900">
                                {l(article.title)}
                              </h1>

                              <p className="text-base text-gray-600 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                {l(article.excerpt)}
                              </p>
                            </div>
                            {article.mainImage && (
                              <img
                                alt={
                                  article.mainImage?.alt ||
                                  `Photo of ${article.title}`
                                }
                                className="object-cover object-center h-full w-full"
                                src={urlFor(article.mainImage.url)
                                  .auto("format")
                                  .width(800)
                                  .height(Math.floor((9 / 16) * 1000))
                                  .fit("crop")
                                  .quality(100)}
                              />
                            )}
                          </div>

                          <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-4/4 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                              {article.body && (
                                <>
                                  {l(article.body).map((body) => (
                                    <PortableText
                                      blocks={body}
                                      className="text-gray-600"
                                    />
                                  ))}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {data.ContentType === "file" ? (
                        <>
                          <section className=" body-font">
                            <div className="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
                              <div className="text-center lg:w-5/6 w-full">
                                <div className="lg:flex-grow md:w-2/2 lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left items-left text-left">
                                  <p className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mb-8 leading-relaxed">
                                    this is a file
                                  </p>
                                </div>
                              </div>
                            </div>
                          </section>
                        </>
                      ) : (
                        <>some other type</>
                      )}
                    </>
                  )}
                </>
              )}
            </article>
          </main>
          {/* Middle Panel*/}
        </div>
      </div>
    </div>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}