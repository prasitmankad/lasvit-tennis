import PropTypes from "prop-types";
import { PortableText, urlFor } from "../../utils/sanity";

function headerSection(props) {
  return (
    <>
      <header className="relative">
        <div className="bg-warm-gray-50">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between pt-6 px-6 xl:px-8"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full lg:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=teal&shade=500"
                    alt
                  />
                </a>
                <div className="-mr-2 flex items-center lg:hidden">
                  <button
                    type="button"
                    className="bg-warm-gray-50 rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-teal-500"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    {/* Heroicon name: outline/menu */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="hidden space-x-10 lg:flex lg:ml-10">
                <a
                  href="#"
                  className="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900"
                >
                  Changelog
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900"
                >
                  Partners
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900"
                >
                  News
                </a>
              </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <a
                href="#"
                className="py-2 px-6 bg-warm-gray-100 border border-transparent rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-200"
              >
                Login
              </a>
            </div>
          </nav>
        </div>
        {/*
Mobile menu, show/hide based on menu open state.

Entering: "duration-150 ease-out"
  From: "opacity-0 scale-95"
  To: "opacity-100 scale-100"
Leaving: "duration-100 ease-in"
  From: "opacity-100 scale-100"
  To: "opacity-0 scale-95"
    */}
        <div className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top lg:hidden">
          <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=teal&shade=500"
                  alt
                />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                >
                  <span className="sr-only">Close menu</span>
                  {/* Heroicon name: outline/x */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50"
                >
                  Changelog
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50"
                >
                  Partners
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50"
                >
                  News
                </a>
              </div>
              <div className="mt-6 px-5">
                <a
                  href="#"
                  className="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-teal-500 text-white font-medium hover:bg-teal-600"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default headerSection;
