export default {
    type: "object",
    name: "contactForm",
    title: "Contact Form",
  
    fieldsets: [

    ],
    fields: [
      {
        name: "heading",
        type: "string",
        title: "Heading",
        description:
          "Headings for this section.",
        validation: (Rule) =>
          Rule.error("Please provide a title for the Hero Section.").required(),
      },
      {
        name: "subheading",
        type: "string",
        title: "Sub-heading or Category",
        description:
          "Sub-headings for this section - single words that break large chunks of text.",
      },
    
      {
        name: "backgroundColor",
        type: "colorlist", // required
        title: "Background Color",
        description: "Background color for accents on the contact block. Use carefully as this doesn't always work well with images.",
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
          "Explanatory text to use below the heading.",
        
      },
      
     // other elements included by default
    ],
    preview: {
      select: {
        title: "heading",
        disabled: "disabled",
      },
      prepare({ title }) {
        return {
          title: `${title}`,
        };
      },
    },
  };
  

