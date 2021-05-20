import { i18n_options, baseLanguage } from "../../../../translations/config";
import { fieldValidationRequired } from "../../validations";

export default {
  type: "object",
  name: "team",
  title: "Team Members",

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
        subtitle: `(Team Block)`,
      };
    },
  },
};
