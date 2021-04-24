//

export default {
  type: "object",
  name: "logoCloud",
  title: "Logo Clouds (As Featured On)",
  fields: [
    {
      name: "backgroundColor",
      type: "colorlist", // required
      title: "Background Color",
      description:
        "Used as the background color for the section. Use carefully as this doesn't always work well with images.",
      validation: (Rule) =>
        Rule.required().error("This field is required."),
      options: {
        borderradius: {
          outer: "100%",
          inner: "100%",
        },
        list: [
          { title: "white", value: "#ffffff" },
          { title: "gray", value: "#c0ccda" },
          { title: "gray-dark", value: "#3c4858" },
          { title: "gray-darkest", value: "#1f2d3d" },
          { title: "pink", value: "#FF6A64" },
          { title: "orange", value: "#F15926" },
          { title: "teal-light", value: "#31E2E8" },
          { title: "teal", value: "#20C0D9" },
          { title: "teal-dark", value: "#01ADCA" },
          { title: "yellow", value: "#FFDE4E" },
        ],
      },
    },


    {
      name: "logos",
      type: "array",
      title: "Featured Logos",
      description:
        "Min of 3 for good appearance. Array of logos to show Featured On as social proof.",
      of: [
        {
          title: "Featured Logos",
          type: "object",
          fields: [
            {
              title: "Link to External Site",
              name: "externalLink",
              type: "url",
            },
            {
              title: "Logo Image",
              name: "logoImage",
              type: "image",
            },
          ],
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
        title: `Array of Logos`,
        subtitle: `(Login Block)`,
      };
    },
  },
};
