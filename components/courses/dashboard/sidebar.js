import React from "react";
import { useLanguage } from "../../../hooks/useLanguage";
import { Disclosure,Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Article } from "./article";
import { Video } from "./video";
import { Dialog, } from "@headlessui/react";
import {
  CalendarIcon,
  CogIcon,
  MapIcon,
  HomeIcon,
  UsersIcon,
  XIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import {
  ChevronLeftIcon,
  FolderIcon,
  InboxIcon,
  ChartBarIcon,
} from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Dashboard", icon: HomeIcon, current: true, href: "#" },
  {
    name: "Team",
    icon: UsersIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Projects",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Calendar",
    icon: CalendarIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Documents",
    icon: InboxIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Reports",
    icon: ChartBarIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
];

const messages = [
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
];

export function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="h-screen flex overflow-hidden bg-white">
        {/* ANIMATION OF OPEN  CLOSE MENUS - REQUIRED FOR MOBILE MENU */}
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
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
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
                  <nav
                    className="flex-1 px-2 space-y-1 bg-white"
                    aria-label="Sidebar"
                  >
                    {navigation.map((item) =>
                      !item.children ? (
                        <div key={item.name}>
                          <a
                            href="#"
                            className={classNames(
                              item.current
                                ? "bg-gray-100 text-gray-900"
                                : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                              "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
                            )}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? "text-gray-500"
                                  : "text-gray-400 group-hover:text-gray-500",
                                "mr-3 flex-shrink-0 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
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
                                    ? "bg-gray-100 text-gray-900"
                                    : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                  "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                )}
                              >
                                <item.icon
                                  className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <span className="flex-1">{item.name}</span>
                                <svg
                                  className={classNames(
                                    open
                                      ? "text-gray-400 rotate-90"
                                      : "text-gray-300",
                                    "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                                  )}
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M6 6L14 10L6 14V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </Disclosure.Button>
                              <Disclosure.Panel className="space-y-1">
                                {item.children.map((subItem) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
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
                <nav
                  className="flex-1 px-2 space-y-1 bg-white"
                  aria-label="Sidebar"
                >
                  {navigation.map((item) =>
                    !item.children ? (
                      <div key={item.name}>
                        <a
                          href="#"
                          className={classNames(
                            item.current
                              ? "bg-gray-100 text-gray-900"
                              : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                            "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "mr-3 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
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
                                  ? "bg-gray-100 text-gray-900"
                                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              )}
                            >
                              <item.icon
                                className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              <span className="flex-1">{item.name}</span>
                              <svg
                                className={classNames(
                                  open
                                    ? "text-gray-400 rotate-90"
                                    : "text-gray-300",
                                  "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                                )}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  d="M6 6L14 10L6 14V6Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="space-y-1">
                              {item.children.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
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
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
          {/* ON MOBILE BREADCRUMBS */}
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
          {/* MAIN SECTIONS */}
          <div className="flex-1 relative z-0 flex overflow-hidden">
            <aside className="hidden xl:block xl:flex-shrink-0 xl:order-first">
              <div className="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100">
                <div className="flex-shrink-0">
                  <div className="h-16 bg-white px-6 flex flex-col justify-center">
                    <div className="flex items-baseline space-x-3">
                      <h2 className="text-lg font-medium text-gray-900">
                        Module Name
                      </h2>

                      <p className="text-sm font-medium text-gray-500">
                        {messages.length} messages
                      </p>
                    </div>
                  </div>
                </div>
                <nav
                  aria-label="Message list"
                  className="min-h-0 flex-1 overflow-y-auto"
                >
                  <ul className="border-b border-gray-200 divide-y divide-gray-200">
                    {messages.map((message) => (
                      <li
                        key={message.id}
                        className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
                      >
                        <div className="flex justify-between space-x-3">
                          <div className="min-w-0 flex-1">
                            <a
                              href={message.href}
                              className="block focus:outline-none"
                            >
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              />
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {message.sender}
                              </p>
                              <p className="text-sm text-gray-500 truncate">
                                {message.subject}
                              </p>
                            </a>
                          </div>
                          <time
                            dateTime={message.datetime}
                            className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                          >
                            {message.date}
                          </time>
                        </div>
                        <div className="mt-1">
                          <p className="line-clamp-2 text-sm text-gray-600">
                            {message.preview}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

