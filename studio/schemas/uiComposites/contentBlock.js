

export default {
    type: "object",
    name: "contentBlock",
    title: "Content Block",
    fields: [
      
      {
        name: "body",
        type: "array",
        title: "Body",
        description:
          "The content for your Blog Post. Words, images, videos and other content.",
        of: [{ type: "block" }],
      },
      
    ],
    preview: {
      select: {
        title: "title",
        subtitle: "subtitle",
        disabled: "disabled",
      },
      prepare({ title, subtitle }) {
        return {
          title: `Content Block`,
          //subtitle: `${subtitle}`,
        };
      },
    },
  };
  