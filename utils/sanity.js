import React from "react";
import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from "next-sanity";

import ReactPlayer from 'react-player'
const config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
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
      videoEmbed: (props) => {
        
        // const { url } = props.node.url;

        if (!props.node.url) {
          console.log("video props ->", props);
          return null;
        }

        return <ReactPlayer url={props.node.url} controls />;
      },

      // render text blocks
      block: (props) => {
        const style = props.node.style || "normal";
        if (style == "h1") {
          return (
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {props.children}
            </h1>
          );
        }
        if (style == "h2") {
          return (
            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
              {props.children}
            </h2>
          );
        }
        if (style == "h3") {
          return (
            <h3 class="title-font font-medium text-gray-900">
              {props.children}
            </h3>
          );
        }

        if (/^h\d/.test(style)) {
          const level = style.replace(/[^\d]/g, "");
          return React.createElement(`h${level}`, {}, props.children);
        }

        return style === "blockquote" ? (
          <blockquote>– {props.children}</blockquote>
        ) : (
          <p class="leading-relaxed">{props.children}</p>
        );
      },
      // render code block
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),

      // render image
      mainImage: (props) => (
        <figure>
          <img
            src={urlFor(props.node.asset)
              .auto("format")
              .width(500)
              // .height(400)
              //.fit("crop")
              .quality(80)
              .url()}
            alt={props.node.alt}
          />
          <figcaption>{props.node.caption}</figcaption>
        </figure>
      ),
    },
    list: (props) =>
      // console.log("list", props) ||
      props.type === "bullet" ? (
        <ul>{props.children}</ul>
      ) : (
        <ol>{props.children}</ol>
      ),
    listItem: (props) =>
      console.log("list", props) ||
      (props.type === "bullet" ? (
        <li>{props.children}</li>
      ) : (
        <li>{props.children}</li>
      )),
    marks: {
      strong: (props) =>
        console.log("strong", props) || <strong>{props.children}</strong>,
      em: (props) => console.log("em", props) || <em>{props.children}</em>,
      code: (props) =>
        console.log("code", props) || <code>{props.children}</code>,
      externalLink: (props) => {
        return (
          <Link href={props.mark.url}>
            <a class="mr-5 hover:text-gray-900 cursor-pointer">
              {props.children}
            </a>
          </Link>
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
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
