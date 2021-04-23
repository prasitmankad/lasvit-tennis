export default {
  type: "object",
  name: "contentBlock",
  title: "Content Block",
  fields: [
    {
      name: "body",
      type: "blockContent",
      title: "Body",
      description:
        "The content for your Blog Post. Words, images, videos and other content.",
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
        title: `Basic Content Block`,
        //subtitle: `${subtitle}`,
      };
    },
  },
};
