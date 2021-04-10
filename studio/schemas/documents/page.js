import { RiPagesLine as icoPages } from "react-icons/ri";
// TODO: Enforce limit and make delete button work

export default {
  name: "page",
  type: "document",
  title: "Page",
  icon: icoPages,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Page Title",
      description:
        "Titles should be catchy, descriptive, and not too long. The title is also used to generate a unique slug.",
      validation: (Rule) =>
        Rule.error("Please fill out the required field.").required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Required to generate the blog post unique URL. Some frontends also require this for accurate context within the overall content model to be able to show the post.",
      validation: (Rule) =>
        Rule.error(
          "You must generate a slug so that the frontend can query and render the blog post."
        ).required(),
      options: {
        source: "title",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "content",
      type: "array",
      title: "Sections",
      Description:
        "Use this to construct the page layout, section by section. Each section has additional fields with information that can be configured and shown on the frontend.",
      of: [
        { type: "hero" },
        { type: "pageHeading" },
        { type: "blogRoll" },
        { type: "contentBlock" }, // basic content block
        // { type: "contentRoll" },
        // { type: "faq" },
        // { type: "featureDetail" },
        { type: "featuredOn" },
        { type: "featureGrid" },
        // { type: "featureList" },

        // { type: "pricingSingle" },
        { type: "signup" },
        { type: "siteNotice" },
        // { type: "stats" },
        { type: "team" },
        { type: "login" },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
