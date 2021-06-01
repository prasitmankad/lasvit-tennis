import { i18n_options, baseLanguage } from "../../../../translations/config";
import { fieldValidationRequired } from "../../validations";

export default {
  type: "object",
  name: "login",
  title: "Login Block",

  fieldsets: [
    {
      name: "basic",
      title: "Basic Settings",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2,
      },
    },
    {
      name: "details",
      title: "Detailed Settings",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
    },
  ],
  fields: [
    // logo and other info is pulled from Global settings
    {
      name: "heading",
      type: "object",
      fieldset: "basic",
      options: i18n_options,
      validation: fieldValidationRequired("heading", "Heading"),
      fields: [
        {
          name: "heading",
          type: "string",
          title: "Heading",
          description:
            "Headings should be short & catchy, descriptive, and only a couple of words long.",
        },
      ],
    },
    {
      name: "subheading",
      type: "object",
      fieldset: "basic",
      options: i18n_options,
      fields: [
        {
          name: "subheading",
          type: "string",
          title: "Sub-heading or Category",
          description:
            "Sub-headings are event shorter, can be used as categories - single words that break large chunks of text.",
        },
      ],
    },
    {
      name: "content",
      type: "object",
      options: i18n_options,
      fields: [
        {
          name: "content",
          type: "text",
          title: "Content",
          description:
            "Usually 1-2 sentences used in the heading as a lead-in to the section detail.",
        },
      ],
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main Image",
      description: "Image used on the login page.",
      validation: (Rule) => Rule.required().error("This field is required."),
    },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "subheading",
    },
    prepare({ title, subtitle }) {
      return {
        title:
          title && typeof title === "object"
            ? title[baseLanguage].heading
            : title,
        subtitle: `(Login Block)`,
      };
    },
  },
};
