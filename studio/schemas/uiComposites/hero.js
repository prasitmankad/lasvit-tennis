
export default {
  type: "object",
  name: "hero",
  title: "Hero",

  fieldsets: [
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
      name: "image",
      title: "Image Settings",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
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
    {
      name: "heading",
      type: "string",
      title: "Heading",
      fieldset: "basic",

      description:
        "Headings should be short & catchy, descriptive, and only a couple of words long.",
      validation: (Rule) =>
        Rule.error("Please provide a title for the Hero Section.").required(),
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
      name: "backgroundColor",
      type: "colorlist", // required
      title: "Background Color",
      description: "Used as the background color for the section. Use carefully as this doesn't always work well with images.",
      validation: (Rule) =>
        Rule.warning("Please fill out the field.").required(),
      options: {
        borderradius: {
          outer: "100%",
          inner: "100%",
        },
        list: [
          { title: "White", value: "#ffffff" },
          { title: "Pink", value: "#FF6A64" },
          { title: "Orange", value: "#F15926" },
          { title: "Light Teal", value: "#31E2E8" },
          { title: "Light Teal", value: "#20C0D9" },
          { title: "Dark Teal", value: "#01ADCA" },
          { title: "Yellow", value: "#FFDE4E" },
          { title: "Mid Grey", value: "#464343" },
        ],
      },
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
      fieldset: "image",
      description:
        "Image used in the layout e.g. hero image, feature image etc.. Other images can be included when writing the body.",
    },

    // {
    //   title: "Image Location",
    //   name: "imageLocation",
    //   type: "string",
    //   fieldset: "image",
    //   description:
    //     "Controls where the image is displayed. Used for Feature Detail layouts.",
    //   //fieldset: "image",
    //   options: {
    //     list: [
    //       { title: "None", value: "none" },

    //       { title: "Left", value: "left" },
    //       { title: "Right", value: "right" },
    //       { title: "Top Center", value: "topCenter" },
    //       { title: "Bottom Center", value: "bottomCenter" },
    //     ], // <-- predefined values
    //     //layout: 'radio' // <-- defaults to 'dropdown'
    //   },
    // },
    {
      name: "buttons",
      type: "array",
      title: "Buttons",
      description: "Add up to 2 buttons to go to a specific internal or external page.",
      of: [
        {
          title: "Call to Action",
          type: "cta",
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
        title: `Hero Section: ${title}`,
        subtitle: `${subtitle}`,
      };
    },
  },
};
