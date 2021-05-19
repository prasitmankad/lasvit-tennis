import { RiKeyboardLine as icoContent } from "react-icons/ri";
import { i18n_options, baseLanguage } from "../../../translations/config";
import { fieldValidationRequired } from "../validations";

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
        collapsible: true,
        collapsed: true,
        columns: 1,
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
        ],
      },
      validation: (Rule) => Rule.required().error("This field is required."),
    },

    {
      name: "contentTitle",
      type: "object",
      options: i18n_options,
      fields: [
        {
          title: "Content Title",
          name: "contentTitle",
          type: "string",
          description:
            "Specify the title of the content. e.g. name of the video. Used on content rolls / summary pages.",
        },
      ],
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Required to generate the content item's unique URL.",
      validation: (Rule) => Rule.error("You must generate a slug.").required(),
      options: {
        source: "contentTitle",
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
      type: "object",
      options: i18n_options,
      validation: fieldValidationRequired(
        "shortDescription",
        "Short Description"
      ),
      fields: [
        {
          name: "shortDescription",
          type: "text",
          title: "Short Description",
          description:
            "1-2 sentences describing the content item. Used on content rolls / summary pages.",
        },
      ],
    },
    {
      name: "longDescription",
      type: "object",
      options: i18n_options,
      fields: [
        {
          name: "longDescription",
          type: "blockContent",
          title: "Long Description.",
          description:
            "A detailed or transcript for Videos. For articles, this is the Article content itself.",
        },
      ],
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
      description:
        "Choose module(s) to publish this Content Item in. This make it the Content Item a part of that Module and therefore part of the Course.",
      of: [{ type: "reference", weak: true, to: [{ type: "module" }] }],
      validation: (Rule) => Rule.required().error("This field is required."),
    },
  ],
  preview: {
    select: {
      title: "contentTitle",
      subtitle: "contentType",
      //publishedAt: "publishedAt",
      //slug: "slug",
      //media: "mainImage",
    },
    prepare({ title, subtitle }) {
      return {
        title:
          title && typeof title === "object"
            ? title[baseLanguage].contentTitle
            : title,
        subtitle: `${subtitle}`,
      };
    },
  },
};
