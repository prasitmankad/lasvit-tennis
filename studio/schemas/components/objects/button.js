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
    {
      name: "buttonText",
      type: "string",
      title: "Button Text",
      description: "The text to show on the button.",
    },
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
  ],
  preview: {
    select: {
      title: "buttonText",
      routeTitle: "links.route.title",
      slug: "links.route.slug.current",
      link: "links.link",
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
