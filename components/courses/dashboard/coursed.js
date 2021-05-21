import { Fragment, useState } from "react";
import { Disclosure, Dialog, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  CogIcon,
  HomeIcon,
  MapIcon,
  MenuIcon,
  SearchCircleIcon,
  SpeakerphoneIcon,
  UserGroupIcon,
  ViewGridAddIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  ChevronLeftIcon,
  FilterIcon,
  MailIcon,
  PhoneIcon,
  SearchIcon,
} from "@heroicons/react/solid";

import { ArticleList } from "./listArticle";
import { Article } from "./detailArticle";

// const navigation = [
//   { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
//   { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
//   { name: "Teams", href: "#", icon: UserGroupIcon, current: false },
//   { name: "Directory", href: "#", icon: SearchCircleIcon, current: false },
//   { name: "Announcements", href: "#", icon: SpeakerphoneIcon, current: false },
//   { name: "Office Map", href: "#", icon: MapIcon, current: false },
// ];
const navigation = [
  { name: "Module 1", href: "#", current: true },
  {
    name: "Team",
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Module 2",
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Module 3",
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Module 4",
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Module 5",
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Course() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-pink-500-mark-gray-900-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="mt-5 flex-grow flex flex-col">
                  <nav
                    className="flex-1 px-2 space-y-1 bg-white"
                    aria-label="Sidebar"
                  >
                    {navigation.map((item) =>
                      !item.children ? (
                        <div key={item.name}>
                          <a
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-white text-orange"
                                : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                              "group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md"
                            )}
                          >
                            {item.name}
                          </a>
                        </div>
                      ) : (
                        <Disclosure
                          as="div"
                          key={item.name}
                          className="space-y-1"
                        >
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={classNames(
                                  item.current
                                    ? "bg-white text-orange"
                                    : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                  "group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                                {item.name}
                              </Disclosure.Button>
                              <Disclosure.Panel className="space-y-1">
                                {item.children.map((subItem) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                  >
                                    {subItem.name}
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

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-gray-100">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-pink-500-mark-gray-900-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="mt-5 flex-grow flex flex-col">
                <nav
                  className="flex-1 px-2 space-y-1 bg-white"
                  aria-label="Sidebar"
                >
                  {navigation.map((item) =>
                    !item.children ? (
                      <div key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-white text-orange"
                              : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                            "group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md"
                          )}
                        >
                          {item.name}
                        </a>
                      </div>
                    ) : (
                      <Disclosure
                        as="div"
                        key={item.name}
                        className="space-y-1"
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.current
                                  ? "bg-white text-orange"
                                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                "group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                              {item.name}
                            </Disclosure.Button>
                            <Disclosure.Panel className="space-y-1">
                              {item.children.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                >
                                  {subItem.name}
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
        <div className="lg:hidden">
          <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
            <div>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-pink-500.svg"
                alt="Workflow"
              />
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
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            {/* Breadcrumb */}
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
            {/* <article> tag encapsulates the detailed content for a selected Video, Article or File */}
            {/* Return Article, Video or File based on what's selected in the middle panel */}
            <article>
              <div className="px-6 pt-6 pb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Module Name
                </h2>
                <p className="mt-1 text-sm text-gray-600">Module Description</p>
              </div>
              {/* Content Area -- put returned Component here*/}
              <Article />
            </article>
          </main>
          {/* middle panel */}
          <aside className="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
            <div className="px-6 pt-6 pb-4">
              <h2 className="text-lg font-medium text-gray-900">Module Name</h2>
              <p className="mt-1 text-sm text-gray-600">Module Description</p>
            </div>
            {/* return ArticleList, VideoList or FileList depending on what's selected in sidebar*/}
            <ArticleList />
          </aside>
        </div>
      </div>
    </div>
  );
}
