// https://tailwindui.com/components/marketing/sections/newsletter-sections#component-f166d5961b0707369d1dd54aee4b5c87

import { urlFor } from "../../utils/sanity";
import Link from "next/link";

export default function signup(props) {
  // console.log("Signup Props // ", props);

  return (
    <div className={"bg-" + props.sectionData.backgroundColor.title}>
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {props.sectionData.heading}
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">{props.sectionData.text}</p>
        </div>
        {/* TODO: Replace with MailerLite integration */}
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <label htmlFor="emailAddress" className="sr-only">
              Email address
            </label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              autoComplete="email"
              required
              className={
                "w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-" +
                props.globalData.branding.primaryAccentColor.title +
                "focus:border-" +
                props.globalData.branding.primaryAccentColor.title +
                " sm:max-w-xs rounded-md"
              }
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className={
                  "w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-" +
                  props.globalData.branding.primaryAccentColor.title +
                  " hover:bg-" +
                  props.globalData.branding.secondaryAccentColor.title +
                  " focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-" +
                  props.globalData.branding.secondaryAccentColor.title
                }
              >
                Notify me
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-gray-500">
            We care about the protection of your data. Read our{" "}
            <Link href="/privacy">
                  <a className="font-medium underline">
              Privacy Policy.
            </a></Link>
          </p>
        </div>
      </div>
    </div>
  );
}
