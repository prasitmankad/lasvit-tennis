import { MdList } from "react-icons/md";

/*
title
subtitle
section paragraph
max columns
features array
    - feature title / name
    - feature description
    - feature subtitle
    - image or icon
    - cta
*/
export default {
  name: "uiFeatureList",
  type: "object",
  title: "Feature List Section",
  fieldsets: [
    {
      name: "settings",
      title: "Feature Section Settings",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: "listSettings",
      title: "List settings",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      fieldset: "settings",
      description: "Title for the section.",
    },
    {
      name: "subtitle",
      type: "string",
      fieldset: "settings",
      description: "Subtitle for the section.",
    },
    {
      name: "paragraph",
      type: "simpleBlockContent",
      fieldset: "settings",
      description: "Paragraph for the section. Make sure to keep it short.",
    },
    {
      name: 'features',
      type: 'array',
      of: [
        {
          type: 'feature'
        }
      ]
    },
    // {
    //   title: "Max Columns",
    //   description:
    //     "Max columns to display. Will shrink on smaller devices (Min 2, Max 4).",
    //   name: "maxColumns",
    //   type: "number",
    //   fieldset: "listSettings",
    //   min: 2,
    //   max: 4,
    // },
    // {
    //   title: "List type",
    //   name: "listType",
    //   type: "string",
    //   fieldset: "listSettings",
    //   options: {
    //     list: ["checkmark", "ordered", "customIcon"],
    //   },
    // },
  ],
  preview: {
    select: {
      title: "title",
      // features: 'features'
    },
    prepare({ title, features }) {
      return {
        title: title ? `Feature List: ${title}` : "Untitled feature list",
        // subtitle: `Features: ${features.map(f => f.title).join(', ')}±`,
        media: MdList,
      };
    },
  },
};
