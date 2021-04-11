
export default {
    type: "object",
    name: "siteNotice",
    title: "Site Notice",
  
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
        name: "messageText",
        type: "string",
        title: "Message Text",
  
        description:
          "Message text to show . Keep this super short sentence.",
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
        name: "icon",
        type: "mainImage",
        title: "Icon",
        description:
          "Icon used in the layout ideally 64px square. If no image is provided a default announcement icon will be used.",
      },
  
      {
        title: "Image Location",
        name: "imageLocation",
        type: "string",
        description:
          "Controls where the image is displayed. Used for Feature Detail layouts.",
        //fieldset: "image",
        options: {
          list: [
            { title: "None", value: "none" },
  
            { title: "Left", value: "left" },
            { title: "Right", value: "right" },
            { title: "Top Center", value: "topCenter" },
            { title: "Bottom Center", value: "bottomCenter" },
          ], // <-- predefined values
          //layout: 'radio' // <-- defaults to 'dropdown'
        },
      },
      {
        // TODO: Validation rule 1 MAX
        name: "buttons",
        type: "array",
        title: "Button",
        of: [
          {
            title: "Call to action",
            type: "button",
          },
        ],
      },
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