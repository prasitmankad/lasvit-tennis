// module - describes sections in a course
import { RiFunctionLine as icoModules } from "react-icons/ri";
export default {
  name: "module",
  title: "Module",
  type: "document",
  icon: icoModules,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Module Title",
      required: true,
      description:
        "Titles should be catchy, descriptive, and not too long. The title is also used to generate a unique slug.",
      validation: (Rule) => Rule.required().error("This field is required."),
    },

    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Required to generate the module's unique URL.",
      validation: (Rule) => Rule.error("You must generate a slug.").required(),
      options: {
        source: "title",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },

    {
      name: "mainImage",
      type: "mainImage",
      title: "Cover Image",
      description: "Cover image shown for the Module.",
      validation: (Rule) => Rule.required().error("This field is required."),
    },
    {
      name: "shortDescription",
      type: "text",
      title: "Short Description",
      description: "1-5 sentences describing the module.",
      validation: (Rule) => Rule.required().error("This field is required."),
    },
    {
      name: "tags",
      type: "tags",
      title: "Tags",
    },
    {
      name: "course",
      type: "array",
      title: "Parent Course(s)",
      description: "Choose course(s) to publish this module in",
      of: [{ type: "reference", weak: true, to: [{ type: "course" }] }],
      validation: (Rule) => Rule.required().error("This field is required."),
    },
  ],
  preview: {
    select: {
      title: "title",
      description: "shortDescription",
      media: "mainImage",
    },
    prepare({ title, description, media }) {
      return {
        title,
        description,
        media,
      };
    },
  },
};
