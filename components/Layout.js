import { useState } from "react";
import Link from "next/link";
import { urlFor } from "../utils/sanity";

import Error from "next/error";
import { useRouter } from "next/router";
import {
  getClient,
  PortableText,
  usePreviewSubscription,
} from "../utils/sanity";

function Layout({ children }) {
console.log("Children ->",children)

const pageData = children.props.pageData;
console.log("Page Data ->",pageData[1].logo)
  return (
    <div className="bg-white">
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">

              {/* <img
                src={urlFor(pageData[1].logo)
                  .auto("format")
                  .width(125)
                  // .height(400)
                  .fit("crop")
                  .quality(80)}
                alt={
                  children.props.pageData[1].logo?.alt ||
                  `Photo of ${children.props.pageData[1].title}`
                }
              /> */}
            </a>
          </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a class="mr-5 hover:text-gray-900 cursor-pointer">Home</a>
            </Link>
            <Link href="/about">
              <a class="mr-5 hover:text-gray-900 cursor-pointer">About</a>
            </Link>
            <Link href="/blog">
              <a class="mr-5 hover:text-gray-900 cursor-pointer">Blog</a>
            </Link>
            <Link href="/contact">
              <a class="mr-5 hover:text-gray-900 cursor-pointer">Contact Us</a>
            </Link>
          </nav>
          {/* <button class="font-bold inline-flex items-center bg-lvtorange border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Ultimate Tennis Parent
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
      </header>
 
      <main className="my-8">{children}</main>

      <footer class="text-gray-600 body-font">
        <div class="bg-gray-100 border-t border-gray-200">
          <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            {/* <Link href="/">
              <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                <img
                  src={urlFor(children.props.pageData[1].logo)
                    .auto("format")
                    .width(80)
                    // .height(400)
                    .fit("crop")
                    .quality(80)}
                  alt={
                    children.props.pageData[1].logo?.alt ||
                    `Photo of ${children.props.pageData[1].title}`
                  }
                />
              </a>
            </Link> */}

            <p class="text-sm text-gray-600 sm:ml-6 sm:mt-0 mt-4">
              © 2021 Lasvit Tennis. All rights reserved.
            </p>

            <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              <Link href="/privacy">
                <a
                  href="https://lasvittennis.com/privacy"
                  rel="noopener noreferrer"
                  class="text-gray-600 ml-1"
                  // target="_blank"
                >
                  Privacy Policy
                </a>
              </Link>{" "}
              //
              <Link href="/terms">
                <a
                  href="https://lasvittennis.com/terms"
                  rel="noopener noreferrer"
                  class="text-gray-600 ml-1"
                  // target="_blank"
                >
                  Website Terms
                </a>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  var settingsData = await getClient(preview).fetch(settingsQuery);
console.log (settingsData)
  return {
    props: {
      preview,
      settingsData,
    },
  };
}

export default Layout;
