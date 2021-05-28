import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { urlFor, PortableText } from "../../utils/sanity";
import { useLanguage } from "../../hooks/useLanguage";

import { Disclosure, Dialog, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import ReactPlayer from "react-player/lazy";

// useEffect(
//   () => {},
//   [
//     //execute once on initial render
//   ]
// );

export function CourseDashboard({ courseData, globalData }) {
  const { l } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuSelection, setMenuSelection] = useState({
    moduleName: courseData.content.modules[0].title, // pre-default module selected
    contentType: "video", // pre-default content type
  });
  console.log("menuSelection -> ", menuSelection);

  const [contentList, setContentList] = useState(
    courseData.content.modules[0].contentItems.filter(
      (x) => x.contentType === menuSelection.contentType
    )
  );
  console.log("contentList -> ", contentList);

  const [contentDetail, setContentDetail] = useState(contentList[0]);
  console.log("contentDetail -> ", contentDetail);

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      {/* MOBILE COMPONENTS */}
      {/* SIDEBAR */}
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
                  {/* Mobile Menu Image */}
                  <Link href="/">
                    <a className="flex items-center text-gray-900 md:mb-0 cursor-pointer">
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
                {/* Mobile Popout Menu 
                list out all the videos and articles here so dont have a separate list in mobile view */}
                <nav className="mt-5" aria-label="Sidebar">
                  <p className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl font-bold text-gray-600 pt-0 pb-4 px-2 mx-auto">
                    {l(courseData.title)}
                  </p>
                  <div className="px-2 space-y-1">
                    {courseData.content.modules.map((module) =>
                      !module.contentItems ? (
                        <div key={module.id}>
                          <a
                            className={classNames(
                              module.current
                                ? "bg-gray-100 text-orange"
                                : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                              "group flex items-center px-2 py-2 text-base font-medium rounded-md cursor-pointer"
                            )}
                          >
                            {l(module.title)}
                          </a>
                        </div>
                      ) : (
                        <Disclosure
                          as="div"
                          key={module.id}
                          className="space-y-1"
                        >
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={classNames(
                                  module.current
                                    ? "bg-gray-100 text-gray-orange"
                                    : "bg-white text-gray-darkest hover:bg-gray-50 hover:text-gray-900",
                                  "group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-sm focus:outline-none focus:ring-1 focus:ring-orange"
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
                                {module.contentItems.map((contentItem) =>
                                  !module.contentItems ? (
                                    <li
                                      key={contentItem.id}
                                      className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange cursor-pointer"
                                    >
                                      <div className="flex justify-between space-x-3">
                                        <div className="min-w-0 flex-1">
                                          <a className="block focus:outline-none">
                                            <span
                                              className="absolute inset-0"
                                              aria-hidden="true"
                                            />
                                            <p className="text-sm font-medium text-gray-dark truncate">
                                              No Content
                                            </p>
                                          </a>
                                        </div>
                                      </div>
                                    </li>
                                  ) : (
                                    <>
                                      <ul className="divide-y divide-gray-200">
                                        <li
                                          onClick={() => {
                                            setSidebarOpen(false);
                                            setContentDetail(contentItem);
                                          }}
                                          key={contentItem.id}
                                          className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange cursor-pointer"
                                        >
                                          <div className="flex justify-between space-x-3">
                                            <div className="min-w-0 flex-1">
                                              <a className="block focus:outline-none">
                                                <span
                                                  className="absolute inset-0"
                                                  aria-hidden="true"
                                                />
                                                <p className="text-sm font-medium text-gray-dark">
                                                  {l(contentItem.contentTitle) +
                                                    l(
                                                      " (" +
                                                        contentItem.contentType
                                                          .charAt(0)
                                                          .toUpperCase() +
                                                        contentItem.contentType.slice(
                                                          1
                                                        ) +
                                                        ") "
                                                    )}
                                                </p>
                                              </a>
                                            </div>
                                          </div>
                                          <div className="mt-1">
                                            <p className="line-clamp-2 text-sm text-gray-600">
                                              {l(contentItem.shortDescription)}
                                            </p>
                                          </div>
                                        </li>
                                      </ul>
                                    </>
                                  )
                                )}

                                {/* {[
                                  ...new Set(
                                    module.contentItems.map(
                                      (x) => x.contentType
                                    )
                                  ),
                                ].map((subItem) => (
                                  <>
                                    <a
                                      onClick={() => setSidebarOpen(false)}
                                      key={subItem.id}
                                      className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                    >
                                      {l(
                                        subItem.charAt(0).toUpperCase() +
                                          subItem.slice(1) +
                                          "s"
                                      )}
                                    </a>
                                  </>
                                ))} */}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      )
                    )}
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* DESKTOP COMPONENTS */}
      {/* ENTIRE SIDEBAR */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-128">
          {/* Sidebar component, swap this with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-gray-100">
            <div className="flex-1 flex flex-col overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                {/* Desktop Menu Logo */}
                <Link href="/">
                  <a className="flex items-center text-gray-900 md:mb-0 cursor-pointer">
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
              {/* SIDEBAR MENU - DESKTOP */}
              <nav
                className="flex-1 px-2 space-y-1 bg-white"
                aria-label="Sidebar"
              >
                <p className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl font-medium text-gray-600 p-4 mx-auto">
                  {l(courseData.title)}
                </p>
                {courseData.content.modules.map((module) =>
                  !module.contentItems ? (
                    <div key={module.id}>
                      <a
                        // module menu option clicked, make update via useEffect
                        onClick={() => {}}
                        className={classNames(
                          module.current
                            ? "bg-gray-100 text-gray-900"
                            : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md cursor-pointer"
                        )}
                      >
                        {l(module.title)}
                      </a>
                    </div>
                  ) : (
                    <Disclosure as="div" key={module.id} className="space-y-1">
                      {/* when state is open render menu */}
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              module.current
                                ? "bg-gray-100 text-gray-900"
                                : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                              "group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-sm focus:outline-none focus:ring-1 focus:ring-orange"
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
                            {module.contentItems.map((contentItem) =>
                                  !module.contentItems ? (
                                    <li
                                      key={contentItem.id}
                                      className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange cursor-pointer"
                                    >
                                      <div className="flex justify-between space-x-3">
                                        <div className="min-w-0 flex-1">
                                          <a className="block focus:outline-none">
                                            <span
                                              className="absolute inset-0"
                                              aria-hidden="true"
                                            />
                                            <p className="text-sm font-medium text-gray-dark truncate">
                                              No Content
                                            </p>
                                          </a>
                                        </div>
                                      </div>
                                    </li>
                                  ) : (
                                    <>
                                      <ul className="divide-y divide-gray-200">
                                        <li
                                          onClick={() => {
                                            setSidebarOpen(false);
                                            setContentDetail(contentItem);
                                          }}
                                          key={contentItem.id}
                                          className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange cursor-pointer"
                                        >
                                          <div className="flex justify-between space-x-3">
                                            <div className="min-w-0 flex-1">
                                              <a className="block focus:outline-none">
                                                <span
                                                  className="absolute inset-0"
                                                  aria-hidden="true"
                                                />
                                                <p className="text-sm font-normal text-gray-dark">
                                                  {l(contentItem.contentTitle) +
                                                    l(
                                                      " (" +
                                                        contentItem.contentType
                                                          .charAt(0)
                                                          .toUpperCase() +
                                                        contentItem.contentType.slice(
                                                          1
                                                        ) +
                                                        ") "
                                                    )}
                                                </p>
                                              </a>
                                            </div>
                                          </div>
                                          {/* <div className="mt-1">
                                            <p className="line-clamp-2 text-sm text-gray-600">
                                              {l(contentItem.shortDescription)}
                                            </p>
                                          </div> */}
                                        </li>
                                      </ul>
                                    </>
                                  )
                                )}
                            {/* {[
                              ...new Set(
                                module.contentItems.map((x) => x.contentType)
                              ),
                            ].map((subItem) => (
                              <a
                                key={subItem.id}
                                className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                              >
                                {l(
                                  subItem.charAt(0).toUpperCase() +
                                    subItem.slice(1) +
                                    "s"
                                )}
                              </a>
                            ))} */}
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
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        {/* MENU HAMBURGER - MOBILE*/}
        <div className="lg:hidden">
          <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
            <div>
              {/* Hamburger Menu Logo */}
              <Link href="/">
                <a className="flex items-center text-gray-900 md:mb-0 cursor-pointer">
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
            <div>
              <button
                type="button"
                className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 relative z-0 flex overflow-hidden">
          {/* MIDDLE PANEL LIST */}
          {/* <aside className="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200 ">
            <nav
              className="flex-1 min-h-0 overflow-y-auto "
              aria-label="Directory"
            >
              <div className="mt-6 sm:mt-2 2xl:mt-5">
                <div className=" mx-auto px-2 sm:px-4 lg:px-4">
                  <div className="pb-5 pt-5 border-b">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Content List
                    </h3>
                  </div>

                  <div>
                    <ul className="divide-y divide-gray-200">
                      {menuSelection.contentType === "video" ? (
                        <>
                          <ul className="divide-y divide-gray-200">
                            {contentList
                              .filter((x) => x.contentType === "video")
                              .map((video) => (
                                <li
                                  key={video.id}
                                  className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange cursor-pointer"
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
                          {menuSelection.contentType === "article" ? (
                            <>
                              <ul className="divide-y divide-gray-200">
                                {contentList
                                  .filter((x) => x.contentType === "article")
                                  .map((article) => (
                                    <li
                                      key={article.id}
                                      className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange cursor-pointer"
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
                              {menuSelection.contentType === "file" ? (
                                <>
                                  <ul className="divide-y divide-gray-200">
                                    {contentList
                                      .filter((x) => x.contentType === "file")
                                      .map((file) => (
                                        <>
                                          <a
                                            href={file.fileUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            download
                                          >
                                            <li
                                              key={file.id}
                                              className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange cursor-pointer"
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
                                          </a>
                                        </>
                                      ))}
                                  </ul>
                                </>
                              ) : (
                                <>
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </aside> */}
          {/* MAIN CONTENT AREA - DESKTOP AND MOBILE */}
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            {/* MAIN CONTENT */}
            <div className="mt-6 sm:mt-2 2xl:mt-5">
              <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="pb-5 pt-5 border-b lg:visible xl:visible 2xl:visible">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {l(contentDetail.contentTitle) +
                      l(
                        " (" +
                          contentDetail.contentType.charAt(0).toUpperCase() +
                          contentDetail.contentType.slice(1) +
                          ") "
                      )}
                  </h3>
                </div>
                <article>
                  {contentDetail.contentType === "video" ? (
                    <>
                      <section className="body-font">
                        <div className="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
                          <div className="text-center lg:w-5/6 w-full">
                            <div className="player-wrapper">
                              <ReactPlayer
                                controls={true}
                                className="react-player"
                                url={contentDetail.fileUrl}
                                width="100%"
                                height="100%"
                              />
                            </div>

                            <div className="lg:flex-grow md:w-2/2 lg:pl-10 flex flex-col md:items-start md:text-left items-left text-left">
                              {/* <h1 className="custom_heading4 mb-4 font-medium text-gray-900">
                                {l(contentDetail.contentTitle)}
                              </h1> */}
                              <p className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mb-8 mt-4 leading-relaxed">
                                {l(contentDetail.shortDescription)}
                              </p>
                            </div>
                            <div className="lg:flex-grow md:w-2/2 lg:pl-10 flex flex-col md:items-start md:text-left items-left text-left">
                              {contentDetail.longDescription && (
                                <>
                                  {l(contentDetail.longDescription).map(
                                    (body) => (
                                      <PortableText
                                        blocks={body}
                                        className="text-gray-600"
                                      />
                                    )
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </section>
                    </>
                  ) : (
                    <>
                      {contentDetail.contentType === "article" ? (
                        <>
                          <div className="lg:w-6/6 mx-auto py-0">
                            <div className="container px-5 py-10 mx-auto flex flex-col">
                              <div className="rounded-xs h-500 overflow-hidden">
                                <div className="text-center mb-2 py-0">
                                  <h1 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading1 text-gray-900">
                                    {l(contentDetail.contentTitle)}
                                  </h1>

                                  <p className="text-base text-gray-600 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                    {l(contentDetail.excerpt)}
                                  </p>
                                </div>
                                {contentDetail.mainImage && (
                                  <img
                                    alt={
                                      contentDetail.mainImage?.alt ||
                                      `Photo of ${contentDetail.ticontentTitletle}`
                                    }
                                    className="object-cover object-center h-full w-full"
                                    src={urlFor(contentDetail.mainImage.url)
                                      .auto("format")
                                      .width(800)
                                      .height(Math.floor((9 / 16) * 1000))
                                      .fit("crop")
                                      .quality(100)}
                                  />
                                )}
                              </div>

                              <div className="flex flex-col sm:flex-row mt-10">
                                <div className="sm:w-4/4 sm:pl-8 sm:py-8 border-gray-200 sm:border-t-0 border-t mt-4 sm:mt-0 text-center sm:text-left">
                                  {contentDetail.longDescription && (
                                    <>
                                      {l(contentDetail.longDescription).map((body) => (
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
                          {contentDetail.contentType === "file" ? (
                            <>
                              <section className=" body-font">
                                <div className="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
                                  <div className="text-center lg:w-6/6 w-full">
                                    <div className="lg:flex-grow md:w-2/2 flex flex-col md:items-start md:text-left items-left text-left">
                                      <p className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mb-8 leading-relaxed">
                                        Click on the link in the Content List to
                                        view or download the file.
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
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
