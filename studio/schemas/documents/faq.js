import { RiQuestionLine as icoFAQ } from "react-icons/ri";

export default {
  name: "faq",
  type: "document",
  title: "FAQs",
  icon: icoFAQ,
    fields: [
    {
      name: "question",
      type: "string",
      title: "FAQ Question",
      description:
        "Question text for the FAQ.",
      validation: (Rule) =>
      Rule.required().error("This field is required."),
    },
    {
      name: "answer",
      type: "string",
      title: "FAQ Answer",
      description:
        "Answer text for the FAQ.",
      validation: (Rule) =>
      Rule.required().error("This field is required."),
    },  
  ],
 
  preview: {
    select: {
      title: "question",

    },
  },
};
