import { i18n_options, baseLanguage } from "../../../../translations/config";
import { fieldValidationRequired } from "../../validations";

export default {
  type: "object",
  name: "blog",
  title: "Blog Posts",

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
      name: "image",
      title: "Image Settings",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
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
      validation: fieldValidationRequired(
        "subheading",
        "Sub-heading or Category"
      ),
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
      name: "numPosts",
      type: "number",
      title: "Number of Posts",
      description:
        "Enter a multiple of 3 and this many blog post cards will be shown. For main pages, keep it to a small number (max 9). Default is ** all posts **.",
    },

    {
      name: "backgroundColor",
      type: "colorlist", // required
      title: "Background Color",
      description:
        "Used as the background color for the section. Use carefully as this doesn't always work well with images.",
      validation: (Rule) => Rule.required().error("This field is required."),
      options: {
        borderradius: {
          outer: "100%",
          inner: "100%",
        },
        list: [
          { title: "white", value: "#ffffff" },
              { title: "gray-lightest", value: "#F4F5F7" },
              { title: "gray-light", value: "#e0e6ed" },
              { title: "gray", value: "#c0ccda" },
              { title: "gray-dark", value: "#383E48" },

              { title: "gunmetal-dark", value: "#364D62" },
              { title: "gunmetal-medium", value: "#517192" },
              { title: "gunmetal-light", value: "#9FC2DC" },

              { title: "green-fluoro", value: "#D6F02F" },
              { title: "green-lime", value: "#B9DF5B" },
              { title: "green-dark", value: "#246C21" },
        ],
      },
    },
    {
      name: "content",
      type: "object",
      fieldset: "basic",
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
        subtitle: `(Blog Posts Block)`,
      };
    },
  },
};
