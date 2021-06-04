import { i18n_options, baseLanguage } from "../../../../translations/config";
import { fieldValidationRequired } from "../../validations";

export default {
  type: "object",
  name: "contactForm",
  title: "Contact Form",

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
        "Background color for accents on the contact block. Use carefully as this doesn't always work well with images.",
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

    // other elements included by default
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
        subtitle: `(Contact Form Block)`,
      };
    },
  },
};
