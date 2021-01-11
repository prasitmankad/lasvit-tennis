/*
heading
sub-heading
paragraph
array of column block -- min 4 / max 4
  heading
  paragraph
  link / button

*/

export default {
    type: "object",
    name: "uiContentBlock",
    title: "Generic Content Block Section",
  
    fieldsets: [
      {
        name: "descriptor",
        title: "4 Column Section",
        description:
          "4 Column Section to describe services / offerings or categories.",
      },
    ],
    fields: [
      {
        name: "design_type",
        type: "array",
        description: "Select the layout type of Hero Section design to show.",
        fieldset: "descriptor",
        of: [{ type: "string" }],
        validation: Rule => Rule.required().min(1).length(1).warning('Make sure to pick one.').error('Please select one layout option.'),
        options: {
          list: [
            { title: "Image Left", value: "image_left" },
            { title: "Image Right", value: "image_right" },
            { title: "Image Top", value: "image_top" },
          ],
        },
      },
      {
        name: "mainImage",
        type: "mainImage",
        title: "Main or  Headline Image",
        description: "Banner image used for the post.",
        validation: (Rule) =>
          Rule.error("Please provide an image for the post.").required(),
        fieldset: "descriptor",
      },
      {
        name: "title",
        type: "string",
        title: "Hero Title",
        description:
          "Titles should be short & catchy, descriptive, and not too long.",
        validation: (Rule) =>
          Rule.error("Please fill out the Blog Title.").required(),
        fieldset: "descriptor",
      },
      {
        name: "subtitle",
        type: "string",
        title: "Subtitle",
        description:
          "Titles should be catchy, descriptive, and not too long. The title is also used to generate a unique slug.",
        validation: (Rule) =>
          Rule.error("Please fill out the Blog Title.").required(),
        fieldset: "descriptor",
      },
      {
        name: "paragraph",
        type: "bodyPortableText",
        description: "Text for the sub-heading.",
        fieldset: "descriptor",
      },
      {
        name: "button_text",
        type: "string",
        description: "Text to place on the button. If blank, the button will not be visible.",
        fieldset: "descriptor",
      },
      {
        name: "button_link",
        type: "url",
        title: "Button Display Text",
        description: "Page the user is navigated to when button is clicked. Note there's no validation on this link so make sure it is correct!",
        fieldset: "descriptor",    },
    ],
    preview: {
      select: {
        title: "title",
        subtitle: "subtitle",
        disabled: "disabled",
      },
      prepare({ title, subtitle }) {
        return {
          title: `Content Block: ${title}`,
          subtitle: `${subtitle}`,
        };
      },
    },
  };
  