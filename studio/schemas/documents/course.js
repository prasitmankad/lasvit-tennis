import { RiMacbookLine as icoCourses } from "react-icons/ri";

export default {
  name: "course",
  title: "Course",
  description: "Create and configure a Course",
  type: "document",
  icon: icoCourses,
  fieldsets: [
    {
      name: "basic",
      title: "Basic Info",
      description: "Basic information for the Course.",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 2, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: "content",
      title: "Course Content",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 2, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: "media",
      title: "Media",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: "pricing",
      title: "Pricing",
      description: "Set up pricing for the Course.",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: "faq",
      title: "Frequently Asked Questions",
      description: "Frequently Asked Questions for this Course.",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
  ],
  fields: [
    // Basic Info
    {
      name: "title",
      type: "string",
      title: "Course Title",
      required: true,
      fieldset: "basic",
      description:
        "Titles should be catchy, descriptive, and not too long. The title is also used to generate a unique slug.",
      validation: (Rule) =>
        Rule.error("Please fill out the required field.").required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      fieldset: "basic",
      description: "Unique link / reference to the Course.",
      options: {
        source: "title",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "shortDescription",
      type: "text",
      title: "Short Description",
      fieldset: "basic",
      description:
        "What is this course all about? Used in landing pages, course landing page etc.",
      validation: (Rule) =>
        Rule.warning("Please fill out the field.").required(),
    },

    // Content
    {
      title: "Course Content",
      name: "content",
      type: "object",
      description: "Course content details. Course Modules are automatically included on the Landing Page.",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2,
      },
      fields: [
        // Automatically included are references to all Modules of the course
        {
          name: "sneakpeek",
          type: "array",
          title: "Content Sneak Peek",
          description: "Selected content items to show as a sneak peek.",
          of: [
            {
              type: "reference",
              to: [{ type: "contentItem" }],
              // TODO: Filter on free / sneak peek content items
              // TODO: Add free / sneak peek flag to content items
            },
          ],
        },
        {
          name: "features",
          type: "array",
          title: "Course Features",
          description: "Array of features for the course.",
          of: [{ type: "feature" }],
        },
      ],
    },

    {
      name: "mainImage",
      type: "mainImage",
      title: "Course Image",
      required: true,
      fieldset: "media",
      description:
        "The image should be either jpg or png. Preferably 3000 x 3000, minimum 1400 x 1400 pixels. Used on sales pages and course landing pages.",
    },
    // {
    //   name: "tags",
    //   type: "tags",
    //   title: "Tags",
    //   fieldset: "details",
    //   description:
    //     "List of tags that can be used for future sorting, searching.",
    // },

    // Stats Section
    {
      title: "Course Statistics",
      name: "stats",
      type: "object",
      description: "Content statistics for this course.",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
      fields: [
        {
          name: "heading",
          type: "string",
          title: "Heading",
          description:
            "Headings should be short & catchy, descriptive, and only a couple of words long.",
          validation: (Rule) =>
            Rule.error(
              "Please provide a title for the Hero Section."
            ).required(),
        },
        {
          name: "subheading",
          type: "string",
          title: "Section Sub-heading or Category",
          description:
            "Sub-headings are event shorter, can be used as categories - single words that break large chunks of text.",
        },
        {
          name: "content",
          type: "text",
          title: "Content",
          description:
            "Usually 1-2 sentences used in the heading as a lead-in to the section detail.",
        },
        {
          name: "statistics",
          type: "array",
          title: "Statistics",
          description: "Set of stats for this Course.",
          of: [
            {
              type: "object",
              fields: [
                { name: "value", type: "string", title: "Value" },
                { name: "metric", type: "string", title: "Metric" },
              ],

              // TODO: Filter on free / sneak peek content items
              // TODO: Add free / sneak peek flag to content items
            },
          ],
        },
      ],
    },

    // Price Section
    {
      title: "Pricing",
      name: "pricing",
      type: "object",
      description: "Pricing settings for this course.",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
      fields: [
        {
          name: "heading",
          type: "string",
          title: "Section Heading",
          description:
            "Headings should be short & catchy, descriptive, and only a couple of words long.",
        },
        {
          name: "subheading",
          type: "string",
          title: "Section Sub-heading or Category",
          description:
            "Sub-headings are event shorter, can be used as categories - single words that break large chunks of text.",
        },
        {
          name: "content",
          type: "text",
          title: "Section Text",
          description:
            "Usually 1-2 sentences used in the heading as a lead-in to the section detail.",
        },

        {
          name: "prices",
          type: "array",
          title: "Prices",
          description: "Set of prices for this Product.",
          of: [
            {
              type: "object",
              fields: [
                { name: "symbol", type: "string", title: "Currency Symbol" },
                { name: "currency", type: "string", title: "Currency" },
                { name: "value", type: "number", title: "Value" },
              ],

              // TODO: Filter on free / sneak peek content items
              // TODO: Add free / sneak peek flag to content items
            },
          ],
        },
      ],
    },

    // FAQ Section
    {
      title: "Frequently Asked Questions",
      name: "faqs",
      type: "object",
      description: "FAQ settings for this course.",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
      fields: [
        {
          name: "heading",
          type: "string",
          title: "Heading",
          description:
            "Headings should be short & catchy, descriptive, and only a couple of words long.",
          validation: (Rule) =>
            Rule.error(
              "Please provide a title for the Hero Section."
            ).required(),
        },
        {
          name: "content",
          type: "text",
          title: "Content",
          description:
            "Usually 1-2 sentences used in the heading as a lead-in to the section detail.",
        },
        {
          name: "faq",
          type: "array",
          title: "FAQs",
          description: "Selected FAQs to show for this course.",
          of: [
            {
              type: "reference",
              to: [{ type: "faq" }],
              // TODO: Filter on free / sneak peek content items
              // TODO: Add free / sneak peek flag to content items
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      description: "description",
      media: "coverArt",
    },
  },
};
