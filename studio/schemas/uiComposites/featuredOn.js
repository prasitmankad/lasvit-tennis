//

export default {
  type: "object",
  name: "featuredOn",
  title: "Featured On",
  fields: [
    {
      name: "backgroundColor",
      type: "colorlist", // required
      title: "Background Color",
      description:
        "Used as the background color for the section. Use carefully as this doesn't always work well with images.",
      validation: (Rule) =>
        Rule.warning("Please fill out the field.").required(),
      options: {
        borderradius: {
          outer: "100%",
          inner: "100%",
        },
        list: [
          { title: "White", value: "#ffffff" },
          { title: "Pink", value: "#FF6A64" },
          { title: "Orange", value: "#F15926" },
          { title: "Light Teal", value: "#31E2E8" },
          { title: "Light Teal", value: "#20C0D9" },
          { title: "Dark Teal", value: "#01ADCA" },
          { title: "Yellow", value: "#FFDE4E" },
          { title: "Mid Grey", value: "#464343" },
        ],
      },
    },

    {
      name: "logos",
      type: "array",
      title: "Featured Logos",
      description: "Min of 3 for good appearance. Array of logos to show Featured On as social proof.",
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

    prepare() {
      return {
        title: `As Featured On`,
        subtitle: `Array of logos`,
      };
    },
  },
};
