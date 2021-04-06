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
  name: "uiRecentPosts",
  title: "Recent Blog Posts",

  fieldsets: [
    {
      name: "descriptor",
      title: "Blog Post Section",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description:
        "Section title",
      fieldset: "descriptor",
      validation: (Rule) =>
        Rule.error("Please provide a title for the Section.").required(),
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
      description: "Subtitle for the Section.",
      fieldset: "descriptor",
    },
    {
      name: "tagline",
      type: "string",
      title: "Tagline",
      description: "Tagline. Appears as accented text on the section above the title.",
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
        title: `Blog Section: ${title}`,
        subtitle: `${subtitle}`,
      };
    },
  },
};
