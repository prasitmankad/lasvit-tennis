import React from "react";
import { urlFor } from "../../utils/sanity";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  getClientDetailAction,
  showLoginModalAction,
} from "../../modules/actions/clientAction";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { LoginModal } from "../modals/LoginModal";
import { PayloadModal } from "../modals/PayloadModal";
import { LanguageButton } from "../LanguageButton";
import { useLanguage } from "../../hooks/useLanguage";
import { Loader } from "../Loader";
import { useClient } from "../../hooks/useClient";

export function Header(props) {
  const { client } = useClient();
  const dispatch = useDispatch();
  const billingModal = useSelector((state) => state.billingState.modal);
  const loginModal = useSelector((state) => state.clientState.modal);
  const loading = useSelector((state) => state.applicationState.loading);
  const { l } = useLanguage();

  React.useEffect(() => {
    !client && dispatch(getClientDetailAction());
  }, [client]);

  return (
    <>
      <header>
        <Popover className="relative bg-white">
          {({ open }) => (
            <React.Fragment>
              {loginModal && (
                <LoginModal
                  onClose={() => dispatch(showLoginModalAction(false))}
                />
              )}
              {billingModal && <PayloadModal />}
              <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link href="/">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                      <img
                        src={urlFor(props.data.branding.companyLogo)
                          .auto("format")
                          .width(120)
                          // .height(400)
                          .fit("crop")
                          .quality(80)}
                        alt={props.data.branding.companyLogo?.alt || ``}
                      />
                    </a>
                  </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  <Popover className="relative">
                    {({ open }) => (
                      <React.Fragment>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                {props.data.header.menu.map((item, i) => {
                                  return item.button == undefined ? (
                                    <React.Fragment
                                      key={item._key}
                                    ></React.Fragment>
                                  ) : (
                                    <React.Fragment key={item._key}>
                                      <Link href={`/${item.link.slug.current}`}>
                                        <a
                                          key={i}
                                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                        >
                                          <div className="ml-4">
                                            <p className="text-base font-medium text-gray-900">
                                              {l(item.text)}
                                            </p>
                                          </div>
                                        </a>
                                      </Link>
                                    </React.Fragment>
                                  );
                                })}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </React.Fragment>
                    )}
                  </Popover>

                  {props.data.header.menu.map((item, i) => {
                    return item.button !== undefined ? (
                      <React.Fragment key={item._key}></React.Fragment>
                    ) : (
                      <React.Fragment key={item._key}>
                        <Link
                          href={`/${item.link ? item.link.slug.current : ""}`}
                        >
                          <a
                            key={i}
                            className="text-base font-medium text-gray-500 hover:text-gray-900"
                          >
                            {l(item.text)}
                          </a>
                        </Link>
                      </React.Fragment>
                    );
                  })}
                </Popover.Group>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  {props.data.header.menu.map((item) => {
                    return item.button !== undefined ? (
                      <>
                        {client && client.name ? (
                          <React.Fragment key={item._key}>
                            <Link
                              href={`/${
                                item.link ? item.link.slug.current : ""
                              }`}
                            >
                              <a
                                key={client.name}
                                className={
                                  "text-base font-medium text-gray-500 hover:" +
                                  props.data.branding.primaryAccentColor.title
                                }
                              >
                                {client.name}
                              </a>
                            </Link>
                          </React.Fragment>
                        ) : (
                          <div
                            className="cursor-pointer"
                            onClick={() => dispatch(showLoginModalAction(true))}
                          >
                            <a
                              className={
                                "ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-" +
                                props.data.branding.primaryAccentColor.title +
                                " hover:bg-white hover:border-" +
                                props.data.branding.primaryAccentColor.title +
                                " hover:text-" +
                                props.data.branding.primaryAccentColor.title
                              }
                            >
                              {l(item.text)}
                            </a>
                          </div>
                        )}
                      </>
                    ) : (
                      <React.Fragment></React.Fragment>
                    );
                  })}
                </div>

                <LanguageButton />
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <Link href="/">
                            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                              <img
                                src={urlFor(props.data.branding.companyLogo)
                                  .auto("format")
                                  .width(100)
                                  // .height(400)
                                  .fit("crop")
                                  .quality(80)}
                                alt={props.data.branding.companyLogo?.alt || ``}
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="mt-6">
                        <nav className="grid grid-cols-1 gap-7">
                          {props.data.header.menu.map((item, i) => {
                            return item.button !== undefined ? (
                              <React.Fragment key={item._key}></React.Fragment>
                            ) : (
                              <React.Fragment key={item._key}>
                                <Link
                                  href={`/${
                                    item.link ? item.link.slug.current : ""
                                  }`}
                                >
                                  <a
                                    key={i}
                                    className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                  >
                                    <div className="ml-4 text-base font-medium text-gray-900">
                                      {l(item.text)}
                                    </div>
                                  </a>
                                </Link>
                              </React.Fragment>
                            );
                          })}
                        </nav>
                      </div>
                      <div className="mt-6">
                        {props.data.header.menu.map((item) => {
                          //console.log("item ", item.button);
                          return item.button !== undefined ? (
                            <>
                              {client && client.name ? (
                                <React.Fragment key={item._key}>
                                  <Link href={`/${item.link.slug.current}`}>
                                    <a
                                      key={client.name}
                                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                    >
                                      <div className="ml-4 text-base font-medium text-gray-900">
                                        {client.name}
                                      </div>
                                    </a>
                                  </Link>
                                </React.Fragment>
                              ) : (
                                <div
                                  className="cursor-pointer"
                                  onClick={() =>
                                    dispatch(showLoginModalAction(true))
                                  }
                                >
                                  <a
                                    className={
                                      "w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-" +
                                      props.data.branding.primaryAccentColor
                                        .title +
                                      " hover:bg-white hover:text-" +
                                      props.data.branding.primaryAccentColor
                                        .title
                                    }
                                  >
                                    {l(item.text)}
                                  </a>
                                </div>
                              )}
                            </>
                          ) : (
                            <React.Fragment key={item._key}></React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </React.Fragment>
          )}
        </Popover>
      </header>
      {loading === true && <Loader />}
    </>
  );
}
