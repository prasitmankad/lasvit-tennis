import { i18n_options } from "../../../../translations/config";

export default {
  type: "object",
  name: "contentBlock",
  title: "Content Block",
  fields: [
    {
      name: "body",
      type: "object",
      options: i18n_options,
      fields: [
        {
          name: "body",
          type: "blockContent",
          title: "Body",
          description:
            "The content for your Blog Post. Words, images, videos and other content.",
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
        title: `(Basic Content Block)`,
        //subtitle: `(Basic Content Block)`,
      };
    },
  },
};
