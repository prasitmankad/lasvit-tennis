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
          { title: "gray-lightest", value: "#F4F5F7" },
          { title: "gray-light", value: "#e0e6ed" },
          { title: "gray", value: "#c0ccda" },
          { title: "gray-dark", value: "#383E48" },

          { title: "gunmetal-dark", value: "#364D62" },
          { title: "gunmetal-medium", value: "#517192" },
          { title: "gunmetal-light", value: "#9FC2DC" },

          { title: "green-fluoro", value: "#D6F02F" },
          { title: "green-lime", value: "#B9DF5B" },
          { title: "green-dark", value: "#246C21" },
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
