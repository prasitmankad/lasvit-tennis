import { RiGroupLine as icoTeam } from "react-icons/ri";

export default {
  name: "teamMember",
  type: "document",
  title: "Team Member",
  icon: icoTeam,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Unique reference for the person. Also some frontends will require a slug to be set to be able to show the person.",
      options: {
        source: "title",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },

    {
      name: "image",
      type: "mainImage",
      title: "Image",
      validation: (Rule) => Rule.warning("This field is required.").required(),

    },
    {
      name: "position",
      type: "string",
      title: "Position",
      validation: (Rule) => Rule.warning("This field is required.").required(),
    },
    {
      name: "shortDescription",
      type: "text",
      title: "Short Description",
      description: "1-2 sentence bio used on summary pages.",
      validation: (Rule) => Rule.warning("This field is required.").required(),
    },
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
  preview: {
    select: {
      title: "name",
      subtitle: "position",
      media: "image",
    },
  },
};
