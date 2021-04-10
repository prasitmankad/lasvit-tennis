export default {
    type: "object",
    name: "team",
    title: "Team Members",
  
    fieldsets: [

    ],
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
          "Description of the Team. 1-2 sentences as a lead in to the section detail.",
        
      },
      
      {
        name: "team",
        type: "array",
        title: "Team Members",
        description:
          "Team members of the company.",
        validation: (Rule) =>
          Rule.warning("Please fill out the field.").required(),
        of: [
          {
            type: "reference",
            to: [{ type: "teamMember" }],
          },
        ],
      },
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
  

