import { MdList } from "react-icons/md";

export default {
  name: "uiEmailNewsletter",
  type: "object",
  title: "Email Newsletter Signup Section",
  description: "Settings for the subscription / signup section. The email signup form is controlled by the Email Newsletter provider and hard-coded into the page.",
  fields: [
    {
      name: "title",
      type: "string",
      description: "Title for the section.",
    },
    {
      name: "subtitle",
      type: "string",
      description: "Subtitle for the section.",
    },
    {
      name: "paragraph",
      type: "simpleBlockContent",
      description: "Paragraph for the section. Make sure to keep it short.",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({  title, subtitle }) {
      return {
        title: title ? `Newsletter Signup: ${title}` : "Untitled Newsletter Section",
        media: MdList,
      };
    },
  },
};
