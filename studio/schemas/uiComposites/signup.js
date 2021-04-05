export default {
    type: "object",
    name: "signup",
    title: "Signup",
    descript: "Basic info for signup section. The Form, button settings are controlled by the mailist list integration in code.",
    fields: [
      {
        name: "heading",
        type: "string",
        title: "Heading",  
        description:
          "Headings should be short & catchy, descriptive, and only a couple of words long.",
        validation: (Rule) =>
          Rule.error("Please provide a title for the Hero Section.").required(),
      },
      {
        name: "subheading",
        type: "string",
        title: "Sub-heading or Category",
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
    ],
    preview: {
      select: {
        title: "heading",
        subtitle: "subheading",
      },
      prepare({ title, subtitle }) {
        return {
          title: `Signup: ${title}`,
          subtitle: `${subtitle}`,
        };
      },
    },
  };
  