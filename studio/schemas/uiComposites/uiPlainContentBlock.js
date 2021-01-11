export default {
  type: "object",
  name: "uiPlainContentBlock",
  title: "Plain Content Block Section",

  fieldsets: [
    {
      name: "descriptor",
      title: "Plain Content Block",
      description:
        "Simple content block to be used for plain pages such as privacy, terms & conditions. Minimal formatting applied on frontend. You can create multiple text or content blocks or just create 1 large one.",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Title for the paragraph.",
      fieldset: "descriptor",
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
      description: "Subtitle for the paragraph.",
      fieldset: "descriptor",
    },
    {
      name: "paragraph",
      type: "bodyPortableText",
      description: "Text for the sub-heading.",
      fieldset: "descriptor",
    },
  ],
  preview: {
    select: {
      title: "title",
      disabled: "disabled",
    },
    prepare({ title }) {
      return {
        title: `${title}`,
      };
    },
  },
};
