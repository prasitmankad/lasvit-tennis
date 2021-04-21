import { urlFor } from "../../utils/sanity";
import Link from "next/link";
// TODO: replace a with Link
import { Popover, Transition } from "@headlessui/react";


export default function login(props) {
  console.log("Login Props // ", props);

  return (
    <>
      <Popover className="relative bg-white overflow-hidden">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto ">
              <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:min-h-full">
                <svg
                  className="hidden lg:block relative right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span
                        className={
                          "block text-" +
                          props.globalData.branding.primaryAccentColor.title +
                          " xl:inline"
                        }
                      >
                        Course{" "}
                      </span>
                      <span className="block xl:inline">
                        {props.sectionData.heading}
                      </span>{" "}
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      {props.sectionData.content}
                    </p>

                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <a
                          href="#"
                          className={
                            "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-" +
                            props.globalData.branding.primaryAccentColor.title +
                            " hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                          }
                        >
                          <span className="sr-only">Sign in with Facebook</span>
                          <svg
                            className="w-10 h-10"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a
                          href="#"
                          className={
                            "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-" +
                            props.globalData.branding.primaryAccentColor.title +
                            " hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                          }
                        >
                          <span className="sr-only">Sign in with Twitter</span>
                          <svg
                            className="w-10 h-10"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </div>
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
                  .width(1908)
                  // .height(400)
                  .fit("crop")
                  .quality(80)}
                alt={props.sectionData.mainImage?.alt || ``}
              />
            </div>
          </>
        )}
      </Popover>

      
    </>
  );
}
