import { RiGroupLine as icoTeam } from "react-icons/ri";
import { i18n_options, baseLanguage } from "../../../translations/config";
import { fieldValidationRequired } from "../validations";

export default {
  name: "teamMember",
  type: "document",
  title: "Team Member",
  icon: icoTeam,
  fields: [
    {
      name: "name",
      type: "object",
      options: i18n_options,
      fields: [
        {
          name: "name",
          type: "string",
          title: "Name",
        },
      ],
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Unique reference for the person. Also some frontends will require a slug to be set to be able to show the person.",
      options: {
        source: "name",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },

    {
      name: "image",
      type: "mainImage",
      title: "Image",
      validation: (Rule) => Rule.required().error("This field is required."),
    },
    {
      name: "position",
      type: "object",
      options: i18n_options,
      validation: fieldValidationRequired("position", "Position"),
      fields: [
        {
          name: "position",
          type: "string",
          title: "Position",
        },
      ],
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
          description: "1-2 sentence bio used on summary pages.",
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
          type: "array",
          title: "Long Description",
          description: "Long description / bio of the Team Member.",
          of: [{ type: "block" }],
          lists: [], // no lists
          styles: [], // no heading or other formatting
          marks: {
            decorators: [], // Don't allow any decorators
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "position",
      media: "image",
    },
    prepare({ title, subtitle }) {
      return {
        title:
          title && typeof title === "object" ? title[baseLanguage].name : title,
        subtitle:
          subtitle && typeof subtitle === "object"
            ? subtitle[baseLanguage].position
            : subtitle,
      };
    },
  },
};
