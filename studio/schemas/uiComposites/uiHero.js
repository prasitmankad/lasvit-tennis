// Image
// Headline
// Paragraph
// Button 1
// Button 2
// Style (image left
// Style (image right
// Style (image type

export default {
  type: "object",
  name: "uiHero",
  title: "Hero Section",

  fieldsets: [
    {
      name: "descriptor",
      title: "Hero Section",
      description:
        "Hero Section usually placed at the top of the Home Page and other major pages (e.g. product offers, services pages etc.).",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description:
        "Titles should be short & catchy, descriptive, and not too long.",
      fieldset: "descriptor",
      validation: (Rule) =>
        Rule.error("Please provide a title for the Hero Section.").required(),
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
      description: "Subtitle for the Hero Section.",
      fieldset: "descriptor",
    },
    {
      name: "paragraph",
      type: "bodyPortableText",
      description: "Text for the Hero Section.",
      fieldset: "descriptor",
      validation: (Rule) =>
        Rule.error(
          "Please provide a paragraph for the Hero Section."
        ).required(),
    },
    // {
    //   name: "design_type",
    //   type: "string",
    //   description: "Select the layout type of Hero Section design to show.",
    //   fieldset: "descriptor",
    //   options: {
    //     layout: "radio",
    //     list: ["Image Left", "Image Right", "Image Top"],
    //   },
    // },
    {
      name: "ctas",
      type: "array",
      title: "Call to actions",
      of: [
        {
          title: "Call to action",
          type: "cta",
        },
      ],
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main or  Headline Image",
      description: "Image used for the hero section.",
      validation: (Rule) =>
        Rule.error("Please provide an image for the post.").required(),
      fieldset: "descriptor",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      disabled: "disabled",
    },
    prepare({ title, subtitle }) {
      return {
        title: `Hero Section: ${title}`,
        subtitle: `${subtitle}`,
      };
    },
  },
};
