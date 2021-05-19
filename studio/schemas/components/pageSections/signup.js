import { i18n_options, baseLanguage } from "../../../../translations/config";
import { fieldValidationRequired } from "../../validations";

export default {
  type: "object",
  name: "signup",
  title: "Signup",
  descript:
    "Basic info for signup section. The Form, button settings are controlled by the mailist list integration in code.",
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
      name: "text",
      type: "object",
      options: i18n_options,
      validation: fieldValidationRequired("text", "Text"),
      fields: [
        {
          name: "text",
          type: "string",
          title: "Text",
          description: "Main text for the signup block.",
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
        subtitle: `(Signup Newsletter Block)`,
      };
    },
  },
};
