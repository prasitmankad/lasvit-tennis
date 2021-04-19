export default {
  type: "object",
  name: "siteNotice",
  title: "Site Notice",

  fieldsets: [
    {
      name: "basic",
      title: "Basic Settings",
      options: {
        collapsible: true, 
        collapsed: true, 
        columns: 2, 
      },
    },
    {
      name: "image",
      title: "Image Settings",
      options: {
        collapsible: true, 
        collapsed: true, 
        columns: 1, 
      },
    },
    {
      name: "details",
      title: "Detailed Settings",
      options: {
        collapsible: true, 
        collapsed: true, 
        columns: 1, 
      },
    },
  ],
  fields: [
    {
      name: "messageText",
      type: "string",
      title: "Message Text",
      description: "Message text to show . Keep this super short sentence.",
      validation: (Rule) =>
        Rule.error("Please provide a title for the Hero Section.").required(),
    },
    // TODO: Future requirement to make this dynamic so that Tailwind can pick it up
    // currently not possible given webpack compiles this
    {
      name: "backgroundColor",
      type: "colorlist", // required
      title: "Background Color",
      description:
        "Used as the background color for the section. Use carefully as this doesn't always work well with images.",
      validation: (Rule) =>
        Rule.warning("This field is required.").required(),
      options: {
        borderradius: {
          outer: "100%",
          inner: "100%",
        },
        list: [
          { title: "white", value: "#ffffff" },
          { title: "gray", value: "#c0ccda" },
          { title: "gray-dark", value: "#3c4858" },
          { title: "gray-darkest", value: "#1f2d3d" },
          { title: "pink", value: "#FF6A64" },
          { title: "orange", value: "#F15926" },
          { title: "teal-light", value: "#31E2E8" },
          { title: "teal", value: "#20C0D9" },
          { title: "teal-dark", value: "#01ADCA" },
          { title: "yellow", value: "#FFDE4E" },
        ],
      },
    },
    {
      title: "Link",
      name: "link",
      type: "object",
      description: "Link to provide on the Site Notice.",
      options: {
        collapsible: true,
        collapsed: false,
        columns: 1,
      },
      fields: [
        // {
        //   name: "button",
        //   type: "boolean",
        //   title: "Make Button",
        //   description:
        //     "Select this to make the link into a button. All buttons are placed AFTER links.",
        // },
        // {
        //   name: "highlight",
        //   type: "boolean",
        //   title: "Highlight Button",
        //   description: "Select this to highlight the button.",
        // },
        {
          name: "text",
          type: "string",
          title: "Text",
          description: "Text on the link (or button).",


        },
        {
          name: "link",
          type: "reference",
          title: "Link",
          weak: true,
          type: "reference",
          to: [{ type: "page" }, { type: "course" }, { type: "post" }],
        },
      ],
      validation: (Rule) =>
        Rule.warning("This field is required.").required(),
      //TODO: Add preview text for above object and reference.
      preview: {
        select: {
          title: "text",
          //title: 'caption'
        },
      },
    },
    // {
    //   // TODO: Validation rule 1 MAX
    //   name: "link",
    //   type: "button",
    //   title: "Link",
    //   description: "Link to the page that the site notice will go.",
    // },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "messageText",
    },
    prepare({ title, subtitle }) {
      return {
        title: `Site Notice`,
        subtitle: `${subtitle}`,
      };
    },
  },
};
