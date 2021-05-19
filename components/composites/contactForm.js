import React from "react";
import Link from "next/link";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import { useLanguage } from "../../hooks/useLanguage";

import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function contactForm(props) {
  //console.log("contactForm Props // ", props);
  const { l } = useLanguage();
  const [agreed, setAgreed] = useState(false);

  return (
    <React.Fragment>
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {props.sectionData.heading}
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                {props.sectionData.subheading}
              </p>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                {props.sectionData.content}
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p className="text-gray-500 text-base">
                      {l(props.globalData.businessInfo.contact.streetNo)}{" "}
                      {l(props.globalData.businessInfo.contact.street)}
                      <br />
                      {l(props.globalData.businessInfo.contact.city)},{" "}
                      {l(props.globalData.businessInfo.contact.country)}{" "}
                      {l(props.globalData.businessInfo.contact.zip)}
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label htmlFor="full_name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={
                      "block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:" +
                      props.globalData.branding.primaryAccentColor.title +
                      "focus:" +
                      props.globalData.branding.primaryAccentColor.title +
                      " border-gray-300 rounded-md"
                    }
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>

                <div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Switch
                        checked={agreed}
                        onChange={setAgreed}
                        className={classNames(
                          agreed
                            ? "bg-" +
                                props.globalData.branding.primaryAccentColor
                                  .title
                            : "bg-gray-200",
                          "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        )}
                      >
                        <span className="sr-only">Agree to policies</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            agreed ? "translate-x-5" : "translate-x-0",
                            "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                          )}
                        />
                      </Switch>
                    </div>
                    <div className="ml-3">
                      <p className="text-base text-gray-500">
                        By selecting this, you agree to the{" "}
                        <Link href="/privacy">
                          <a className="font-medium text-gray-700 underline">
                            Privacy Policy
                          </a>
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className={
                      "w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-" +
                      props.globalData.branding.primaryAccentColor.title +
                      " hover:bg-white hover:border-" +
                      props.globalData.branding.primaryAccentColor.title +
                      " hover:text-" +
                      props.globalData.branding.primaryAccentColor.title
                    }
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
