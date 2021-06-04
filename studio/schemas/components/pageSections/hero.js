import { i18n_options, baseLanguage } from "../../../../translations/config";
import { fieldValidationRequired } from "../../validations";

export default {
  type: "object",
  name: "hero",
  title: "Hero",

  fieldsets: [
  
   
  ],
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
      // fieldset: "basic",
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
      // fieldset: "basic",
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
      options: i18n_options,
      validation: fieldValidationRequired("content", "Content"),
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
      // fieldset: "image",
      description:
        "Image used in the layout e.g. hero image, feature image etc.. Other images can be included when writing the body.",
      validation: (Rule) => Rule.required().error("This field is required."),
    },
    {
      name: "buttons",
      type: "array",
      title: "Buttons",
      description:
        "Add up to 2 buttons to go to a specific internal or external page.",
      of: [
        {
          title: "Button",
          type: "button",
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
        subtitle: `(Hero Block)`,
      };
    },
  },
};
