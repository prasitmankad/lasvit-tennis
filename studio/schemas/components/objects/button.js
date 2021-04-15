export default {
  title: "Button",
  name: "button",
  type: "object",
  validation: (Rule) =>
    Rule.custom(
      (fields = {}) =>
        !fields.route || !fields.link || "Only one link type is allowed"
    ),
  fieldsets: [
    {
      title: "Link",
      name: "link",
    },
  ],
  fields: [
    // TODO: type button or link
    // TODO: highlight button (to make to make it solid)
    // TODO: field validation
    // TODO: consistent field descriptions
    {
      name: "buttonText",
      type: "string",
      title: "Button Text",
      description: "The text to show on the button.",
    },
    {
      name: "disabled",
      type: "boolean",
      title: "Highlight",
      description:
        "Highlight this button. This uses the Primary Accent Color to fill in the button.",
    },
    // {
    //   // TODO: Add Icon
    //   // TODO: Size validation
    //   name: "icon",
    //   type: "image",
    //   title: "Button Icon",
    //   description:
    //     "Optional icon image used on the button. Must be transparent PNG, square image, max 48px.",
    // },
    {
      title: "Links",
      name: "links",
      type: "object",
      description:
        "Links to external pages.",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
      fields: [
        {
          name: "route",
          type: "reference",
          title: "Internal link",
          description: "Link to existing pages on the website",
          to: [{ type: "page" }, { type: "course" }],
        },
        {
          name: "link",
          type: "url",
          title: "External link",
          description:
            "Link to external pages on the internet. Enter the full URL.",
        },

      ],
    },

    // {
    //   name: "route",
    //   type: "reference",
    //   title: "Internal link",
    //   description: "Link to existing pages on the website",
    //   to: [{ type: "page" }, { type: "course" }],
    //   fieldset: "link",
    // },
    // {
    //   name: "link",
    //   type: "url",
    //   title: "External link",
    //   description:
    //     "Link to external pages on the internet. Enter the full URL.",
    //   fieldset: "link",
    // },
  ],
  preview: {
    select: {
      title: "title",
      routeTitle: "route.title",
      slug: "route.slug.current",
      link: "link",
    },
    prepare({ title, routeTitle = "", slug, link }) {
      const subtitleExtra = slug
        ? `Slug:/${slug}/`
        : link
        ? `External link: ${link}`
        : "Not set";
      return {
        title: `${title}`,
        subtitle: `${routeTitle} ${subtitleExtra}`,
      };
    },
  },
};
