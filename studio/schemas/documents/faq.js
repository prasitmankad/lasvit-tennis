import { RiQuestionLine as icoFAQ } from "react-icons/ri";
import { i18n_options, baseLanguage } from "../../../translations/config";
import { fieldValidationRequired } from "../validations";

export default {
  name: "faq",
  type: "document",
  title: "FAQs",
  icon: icoFAQ,
  fields: [
    {
      name: "question",
      type: "object",
      options: i18n_options,
      validation: fieldValidationRequired("question", "FAQ Question"),
      fields: [
        {
          name: "question",
          type: "string",
          title: "FAQ Question",
          description: "Question text for the FAQ.",
        },
      ],
    },
    {
      name: "answer",
      type: "object",
      options: i18n_options,
      validation: fieldValidationRequired("answer", "FAQ Answer"),
      fields: [
        {
          name: "answer",
          type: "string",
          title: "FAQ Answer",
          description: "Answer text for the FAQ.",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "question",
    },
    prepare({ title }) {
      return {
        title:
          title && typeof title === "object"
            ? title[baseLanguage].question
            : title,
      };
    },
  },
};
