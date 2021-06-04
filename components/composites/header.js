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

  //console.log("Header Props -> ", props.data.header.menu);

  React.useEffect(() => {
    !client && dispatch(getClientDetailAction());
  }, [client]);

  const navigation = [
    { name: "Changelog", href: "#" },
    { name: "About", href: "#" },
    { name: "Partners", href: "#" },
    { name: "News", href: "#" },
  ];

  return (
    <>
      <header className="bg-white">
        <Popover as="header" className="relative">
          {({ open }) => (
            <>
              {loginModal && (
                <LoginModal
                  onClose={() => dispatch(showLoginModalAction(false))}
                />
              )}
              {billingModal && <PayloadModal />}
              <div className="bg-warm-gray-50">
                <nav
                  className="relative max-w-7xl mx-auto flex items-center justify-between pt-6 px-6 xl:px-8"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-1">
                    <div className="flex items-center justify-between w-full lg:w-auto">
                      <span className="sr-only">The Running Klub</span>
                      <Link href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                          <img
                            src={urlFor(props.data.branding.companyLogo)
                              .auto("format")
                              .width(100)
                              // .height(400)
                              .fit("crop")
                              .quality(100)}
                            alt={props.data.branding.companyLogo?.alt || ``}
                          />
                        </a>
                      </Link>
                      <div className="-mr-2 flex items-center lg:hidden">
                        <Popover.Button className="bg-warm-gray-50 rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-teal-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="hidden space-x-10 lg:flex lg:ml-10">
                      {props.data.header.menu.map((item) => (
                        <>
                          {!item.button && item.link ? (
                            <>
                              <React.Fragment key={item._key}>
                                <Link
                                  href={`/${
                                    item.link ? item.link.slug.current : ""
                                  }`}
                                >
                                  <a className="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900">
                                    {l(item.text)}
                                  </a>
                                </Link>
                              </React.Fragment>
                            </>
                          ) : (
                            <>
                              {item.internalRoute ? (
                                <>
                                  <React.Fragment key={item._key}>
                                    <Link href={`${item.internalRoute}`}>
                                      <a className="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900">
                                        {l(item.text)}
                                      </a>
                                    </Link>
                                  </React.Fragment>
                                </>
                              ) : (
                                <>{item.button && item.link ? <></> : <></>}</>
                              )}
                            </>
                          )}
                        </>
                      ))}
                    </div>
                  </div>

                  <div className="hidden lg:flex lg:items-center lg:space-x-6">
                    {props.data.header.menu.map((item) => (
                      <>
                        {item.button && item.link ? (
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
                                      props.data.branding.primaryAccentColor
                                        .title
                                    }
                                  >
                                    {client.name}
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
                                    "ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-" +
                                    props.data.branding.primaryAccentColor
                                      .title +
                                    " hover:bg-white hover:border-" +
                                    props.data.branding.primaryAccentColor
                                      .title +
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
                          <></>
                        )}
                      </>
                    ))}

                    <LanguageButton />
                  </div>
                </nav>
              </div>
              {/* MOBILE MENU FROM HERE */}
              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top lg:hidden"
                >
                  <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <Link href="/">
                          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                            <img
                              src={urlFor(props.data.branding.companyLogo)
                                .auto("format")
                                .width(100)
                                // .height(400)
                                .fit("crop")
                                .quality(100)}
                              alt={props.data.branding.companyLogo?.alt || ``}
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="pt-5 pb-6">
                      <div className="px-2 space-y-1">
                        {props.data.header.menu.map((item) => (
                          <>
                            {!item.button && item.link ? (
                              <>
                                <React.Fragment key={item._key}>
                                  <Link
                                    href={`/${
                                      item.link ? item.link.slug.current : ""
                                    }`}
                                  >
                                    <a className="block px-3 py-2 text-base font-medium text-warm-gray-500 hover:text-warm-gray-900">
                                      {l(item.text)}
                                    </a>
                                  </Link>
                                </React.Fragment>
                              </>
                            ) : (
                              <>
                                {item.internalRoute ? (
                                  <>
                                    <React.Fragment key={item._key}>
                                      <Link href={`${item.internalRoute}`}>
                                        <a className="block px-3 py-2 text-base font-medium text-warm-gray-500 hover:text-warm-gray-900">
                                          {l(item.text)}
                                        </a>
                                      </Link>
                                    </React.Fragment>
                                  </>
                                ) : (
                                  <>
                                    {item.button && item.link ? <></> : <></>}
                                  </>
                                )}
                              </>
                            )}
                          </>
                        ))}
                      </div>
                      <div className="block px-3 py-2">
                      {props.data.header.menu.map((item) => (
                      <>
                        {item.button && item.link ? (
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
                                      props.data.branding.primaryAccentColor
                                        .title
                                    }
                                  >
                                    {client.name}
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
                                    "whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-" +
                                    props.data.branding.primaryAccentColor
                                      .title +
                                    " hover:bg-white hover:border-" +
                                    props.data.branding.primaryAccentColor
                                      .title +
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
                          <></>
                        )}
                      </>
                      ))}
                        
                        <LanguageButton />
                      </div>
                      
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </header>

       {loading === true && <Loader />}
    </>
  );
}
