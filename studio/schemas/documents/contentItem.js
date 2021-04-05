/*
Type (video, audio, article, file)
Title
Short Description
Parent Module[s]
Link (for video, audio, file only)
Tags
{Page Design} for articles
Thumbnail Image (for video, audio, file)
*/

import { RiKeyboardLine as icoContent } from "react-icons/ri";
export default {
  name: "contentItem",
  title: "Content Item",
  type: "document",
  icon: icoContent,
  fieldsets: [
    {
      name: "details",
      title: "Content Details",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
  ],
  fields: [
    {
      title: "Content Type",
      name: "contentType",
      type: "string",
      description:
        "Select the type of content. This determines how the frontend shows the content.",
      options: {
        list: [
          { title: "Video", value: "video" },
          { title: "Article", value: "article" },
          { title: "File", value: "file" },
        ], // <-- predefined values
        //layout: 'radio' // <-- defaults to 'dropdown'
      },
    },

    {
      title: "Content Title",
      name: "contentTitle",
      type: "string",
      description:
        "Specify the title of the content. e.g. name of the video. Used on content rolls / summary pages.",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Required to generate the content item's unique URL.",
      validation: (Rule) => Rule.error("You must generate a slug.").required(),
      options: {
        source: "title",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "fileUrl",
      title: "External Content Location / URL",
      description:
        "External location/url for the content item. Used for videos, files etc. hosted elsewhere.",
      type: "url",
    },
    {
      name: "shortDescription",
      type: "text",
      title: "Short Description",
      description:
        "1-2 sentences describing the content item. Used on content rolls / summary pages.",
      validation: (Rule) =>
        Rule.warning("Please fill out the field.").required(),
    },
    {
      name: "longDescription",
      type: "array",
      title: "Long Description",
      description:
        "5-10 longer sentences describing the feature in more detail. Shown below the main content. For articles, this is the main content.",
      validation: (Rule) =>
        Rule.warning("Please fill out the field.").required(),
      of: [{ type: "block" }],
    },
    {
      name: "tags",
      type: "tags",
      title: "Tags",
      description:
        "List of tags that can be used for future sorting, searching.",
    },
    {
      name: "modules",
      type: "array",
      title: "Modules",
      description: "Choose module(s) to publish this module in",
      of: [{ type: "reference", weak: true, to: [{ type: "module" }] }],
    },
  ],

  preview: {
    select: {
      title: "contentTitle",
      description: "shortDescription",
    },
    prepare({ title, description }) {
      return {
        title,
        description,
       // media,
      };
    },
  },
};
