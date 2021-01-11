import React from "react";

export default {
  type: "object",
  name: "uiCTA",
  title: "Call to Action Section",
  
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Title for the paragraph.",
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
      description: "Subtitle for the paragraph.",
    },
    {
      name: "paragraph",
      type: "bodyPortableText",
      description: "Text for the sub-heading.",
    },
    {
      name: "ctaLink",
      type: "cta",
      description: "Button, link to use.",
    },
  ],
  preview: {
    select: {
      title: "title",
      disabled: "disabled",
    },
    prepare({ title }) {
      return {
        title: `CTA: ${title}`,
      };
    },
  },
};