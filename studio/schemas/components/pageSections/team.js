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
        Rule.required().error("This field is required."),
      },
      {
        name: "subheading",
        type: "string",
        title: "Sub-heading or Category",
        description:
          "Sub-headings are event shorter, can be used as categories - single words that break large chunks of text.",
      },
      {
        name: "content",
        type: "text",
        title: "Content",
        description:
          "Description of the Team. 1-2 sentences as a lead in to the section detail.",
        
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
  

