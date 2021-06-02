import { i18n_options, baseLanguage } from "../../../../translations/config";
import { fieldValidationRequired } from "../../validations";

export default {
  type: "object",
  name: "siteNotice",
  title: "Site Notice",

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
      name: "messageText",
      type: "object",
      options: i18n_options,
      validation: fieldValidationRequired("messageText", "Message Text"),
      fields: [
        {
          name: "messageText",
          type: "string",
          title: "Message Text",
          description: "Message text to show . Keep this super short sentence.",
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
      title: "Link",
      name: "link",
      type: "object",
      description: "Link to provide on the Site Notice.",
      options: {
        collapsible: true,
        collapsed: false,
        columns: 1,
      },
      fields: [
        {
          name: "text",
          type: "object",
          options: i18n_options,
          validation: fieldValidationRequired("text", "Text"),
          fields: [
            {
              name: "text",
              type: "string",
              title: "Text",
              description: "Text on the link (or button).",
            },
          ],
        },
        {
          name: "link",
          type: "reference",
          title: "Link",
          weak: true,
          type: "reference",
          to: [{ type: "page" }, { type: "course" }, { type: "post" }],
        },
        // TODO: Implement longer term solution
        {
          name: "internalRoute",
          type: "string",
          title: "Internal Route / Deep Link or Path e.g. /courses",
          description:
            "Link to a specific deep path on the site that's not a direct reference. E.g. for a dynamically generated page.",
        },
      ],
      validation: (Rule) => Rule.required().error("This field is required."),
      preview: {
        select: {
          title: "text",
          //title: 'caption'
        },
      },
    },
  ],
  preview: {
    select: {
      title: "messageText",
      subtitle: "",
    },
    prepare({ title, subtitle }) {
      return {
        title:
          title && typeof title === "object"
            ? title[baseLanguage].messageText
            : title,
        subtitle: `(Site Notice Block)`,
      };
    },
  },
};
