import { i18n_options, baseLanguage } from "../../../../translations/config";
import { fieldValidationRequired } from "../../validations";

export default {
  type: "object",
  name: "features",
  title: "Features",

  fieldsets: [],
  fields: [
    {
      name: "heading",
      type: "object",
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
          { title: "gray", value: "#c0ccda" },
          { title: "gray-dark", value: "#3c4858" },
          { title: "gray-darkest", value: "#1f2d3d" },
          { title: "pink", value: "#FF6A64" },
          { title: "orange", value: "#F15926" },
          { title: "teal-light", value: "#31E2E8" },
          { title: "teal", value: "#20C0D9" },
          { title: "teal-dark", value: "#01ADCA" },
          { title: "yellow", value: "#FFDE4E" },
        ],
      },
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
            "Description of the Team. 1-2 sentences as a lead in to the section detail.",
        },
      ],
    },

    {
      name: "feature",
      type: "array",
      title: "Feature",
      description:
        "Min of 2 for good appearance. Array of feature descriptions to show in this section.",
      of: [
        {
          title: "Items",
          type: "object",
          fields: [
            {
              title: "Icon",
              name: "logoImage",
              type: "image",
              description: "A square icon, min 64px for suitable appearance.",
            },
            {
              name: "itemHeading",
              type: "string",
              title: "Item Heading",

              description:
                "Headings should be short & catchy, descriptive, and only a couple of words long.",
              validation: (Rule) =>
                Rule.required().error("This field is required."),
            },
            {
              name: "itemDescription",
              type: "text",
              title: "Item Description",
              description:
                "Usually 1-2 sentences used in the heading as a lead-in to the section detail.",
              validation: (Rule) =>
                Rule.required().error("This field is required."),
            },
          ],
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
        subtitle: `(Features Block)`,
      };
    },
  },
};
