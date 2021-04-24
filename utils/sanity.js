import React from "react";
import Link from "next/link";

import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from "next-sanity";

import ReactPlayer from "react-player/lazy";
const config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2021-03-25", // use a UTC date string
  useCdn: process.env.NODE_ENV === "production",
  // withCredentials: true,
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
};

if (!config.projectId) {
  throw Error("The Project ID is not set. Check your environment variables.");
}
if (!config.dataset) {
  throw Error("The dataset name is not set. Check your environment variables.");
}

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Set up the live preview subsscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)

  // implement inline icon serializer from https://medium.com/@kimbjrkman/how-to-use-inline-images-in-rich-text-with-sanity-io-c42594baa509

  serializers: {
    types: {
      // render video block
      // TODO: Doesn't work - provide Content Block using video.js
      // videoEmbed: (props) => {
      //   // const { url } = props.node.url;

      //   if (!props.node.url) {
      //     console.log("video props ->", props);
      //     return null;
      //   }

      //   return (
      //     <React.Fragment>
      //       <div className="container px-5 py-24 mx-auto flex flex-wrap">
      //         <div className="flex flex-wrap w-full">
      //           <ReactPlayer url={props.node.url} controls />
      //         </div></div>
      //     </React.Fragment>
      //   );
      // },

      // render text blocks
      block: (props) => {
        const style = props.node.style || "normal";
        if (style == "h1") {
          return (
            <React.Fragment>
              <h1 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading1">
                {props.children}
              </h1>
            </React.Fragment>
          );
        }
        if (style == "h2") {
          return (
            <React.Fragment>
              <h2 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
                {props.children}
              </h2>
            </React.Fragment>
          );
        }
        if (style == "h3") {
          return (
            <React.Fragment>
              <h3 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
                {props.children}
              </h3>
            </React.Fragment>
          );
        }
        if (style == "p") {
          return (
            <React.Fragment>
              <p className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
                {props.children}
              </p>
            </React.Fragment>
          );
        }
        if (style == "span") {
          return (
            <React.Fragment>
              <span className="mt-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-xl">
                {props.children}
              </span>
            </React.Fragment>
          );
        }

        if (style == "li") {
          return (
            <React.Fragment>
              <li className="mt-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-xl list-decimal pl-8 mx-auto">
                {props.children}
              </li>
            </React.Fragment>
          );
        }

        // for any other heading tags, return standard heading no additional class names
        if (/^h\d/.test(style)) {
          const level = style.replace(/[^\d]/g, "");
          return React.createElement(
            `h${level}`,
            {
              className:
                "mt-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl font-semibold tracking-wide text-xl",
            },
            props.children
          );
        }

        //case else
        return style === "blockquote" ? (
          <React.Fragment>
            <blockquote className="mt-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-xl">
              – {props.children}
            </blockquote>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p className="mt-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-xl mx-auto">
              {props.children}
            </p>
          </React.Fragment>
        );
      },

      code: (props) => (
        <React.Fragment>
          <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        </React.Fragment>
      ),

      // render image
      mainImage: (props) => (
        <React.Fragment>
          <img
            src={urlFor(props.node.asset)
              .auto("format")
              .width("auto")
              // .height(400)
              //.fit("crop")
              .quality(80)
              .url()}
            alt={props.node.alt}
          />
        </React.Fragment>
      ),
    },
    list: (props) =>
      props.type === "bullet" ? (
        <React.Fragment>
          <ul className="mt-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-xl list-disc pl-8 mx-auto">
            {props.children}
          </ul>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ol className="mt-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-xl list-decimal pl-8 mx-auto">
            {props.children}
          </ol>
        </React.Fragment>
      ),
    // listItem: (props) => (props.type == "number" ? <React.Fragment></React.Fragment> : <React.Fragment></React.Fragment>),
    marks: {
      strong: (props) => <strong>{props.children}</strong>,
      em: (props) => <em>{props.children}</em>,
      code: (props) => <code>{props.children}</code>,
      linkBlog: (props) => {
        // Internal links
        return (
          <React.Fragment>
            <Link href={"/" + props.mark.slug.current}>
              <a className="mt-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-xl cursor-pointer underline">
                {props.children}
              </a>
            </Link>
          </React.Fragment>
        );
      },
      link: (props) => {
        return (
          <React.Fragment>
            <Link href={props.mark.href}>
              <a
                className={
                  "mt-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-xl cursor-pointer underline"
                }
                target="_blank"
                rel="noopener"
              >
                {props.children}
              </a>
            </Link>
          </React.Fragment>
        );
      },
    },
  },
});

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);
// Set up a preview client with serverless authentication for drafts

export const previewClient = createClient({
  ...config,
  useCdn: false,
  //withCredentials: true,
  token: process.env.SANITY_API_TOKEN,
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
