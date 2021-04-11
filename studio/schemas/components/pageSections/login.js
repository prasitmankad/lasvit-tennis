//

export default {
  type: "object",
  name: "login",
  title: "Login Block",

  fieldsets: [
    // TODO: Field validation
    // TODO: Selective Identity Proividers
    {
      name: "basic",
      title: "Basic Settings",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 2, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: "details",
      title: "Detailed Settings",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
  ],
  fields: [
      // logo and other info is pulled from Global settings
    {
      name: "heading",
      type: "string",
      title: "Heading",
      fieldset: "basic",

      description:
        "Headings should be short & catchy, descriptive, and only a couple of words long.",
    },
    {
      name: "subheading",
      type: "string",
      title: "Sub-heading or Category",
      fieldset: "basic",
      description:
        "Sub-headings are event shorter, can be used as categories - single words that break large chunks of text.",
      validation: (Rule) =>
        Rule.error("Please provide a title for the Hero Section.").required(),
    },

    {
      name: "content",
      type: "text",
      title: "Content",
      description:
        "Usually 1-2 sentences used in the heading as a lead-in to the section detail.",
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main Image",
      description:
        "Image used on the login page.",
    },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "subheading",
    },
    prepare({ title, subtitle }) {
      return {
        title: `Login Block`,
        subtitle: `Basic Login Block`,
      };
    },
  },
};
