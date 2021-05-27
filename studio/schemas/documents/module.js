// module - describes sections in a course
import { RiFunctionLine as icoModules } from "react-icons/ri";
import { i18n_options, baseLanguage } from "../../../translations/config";
import { fieldValidationRequired } from "../validations";

export default {
  name: "module",
  title: "Module",
  type: "document",
  icon: icoModules,
  fields: [
    {
      name: "title",
      type: "object",
      options: i18n_options,
      validation: fieldValidationRequired("title", "Module Title"),
      fields: [
        {
          name: "title",
          type: "string",
          title: "Module Title",
          required: true,
          description:
            "Titles should be catchy, descriptive, and not too long. The title is also used to generate a unique slug.",
        },
      ],
    },

    {
      name: "mainImage",
      type: "mainImage",
      title: "Cover Image",
      description: "Cover image shown for the Module.",
      validation: (Rule) => Rule.required().error("This field is required."),
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
          description: "1-5 sentences describing the module.",
        },
      ],
    },
    {
      name: "tags",
      type: "tags",
      title: "Tags",
    },
    {
      name: "contentItems",
      type: "array",
      title: "Content Items",
      description: "Content comprising the module. Order here determines order on the frontend.",
      of: [
        {
          type: "reference",
          to: [{ type: "contentItem" }],
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .error("This field is required and at least 1 content item is required."),
    },

    // {
    //   name: "course",
    //   type: "array",
    //   title: "Parent Course(s)",
    //   description: "Choose course(s) to publish this module in",
    //   of: [{ type: "reference", weak: true, to: [{ type: "course" }] }],
    //   validation: (Rule) => Rule.required().error("This field is required."),
    // },
  ],
  preview: {
    select: {
      title: "title",
      //publishedAt: "publishedAt",
      slug: "slug",
      media: "mainImage",
    },
    prepare({ title = "No title", tags, media }) {
      return {
        title:
          title && typeof title === "object"
            ? title[baseLanguage].title
            : title,
        media,
        subtitle: tags,
      };
    },
  },
};
