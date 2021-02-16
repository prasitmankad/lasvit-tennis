// course_video.js -- holds individual video schema instead of vimeo (so can customise and add tags, change videos, add additional info etc.) in future add other content types, pdf, podcast, other

export default {
  name: "course_video",
  title: "Video",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      required: true,
      description: "Short title for this video.",
      type: "string",
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
    },
    {
      name: "description",
      title: "Description",
      description: `A video description containing one or more sentences describing this video and what it covers. You can specify up to 4000 characters.`,
      type: "text",
      validation: (Rule) => Rule.max(4000),
    },
    {
      name: "module",
      description: "Choose module(s) to publish this module in",
      type: "array",
      of: [{ type: "reference", weak: true, to: [{ type: "course_module" }] }],
    },
    {
      name: "fileUrl",
      title: "External location for video file",
      description: "Provide a link to the YouTube or Vimeo file.",
      type: "url",
    },
    // {
    //   name: "duration",
    //   title: "Duration",
    //   description: "HH:MM:SS",
    //   type: "string",
    // },
    // use for any links or resources mentioned in the video -- at a later date
    // {
    //   name: "linkList",
    //   title: "Link list",
    //   description:
    //     "A more structured way to add links for show notes. Will be compiled at the end of the episode content field in a podcast RSS feed",
    //   type: "array",
    //   of: [
    //     {
    //       type: "linkListItem",
    //     },
    //   ],
    // },

    //    // for future searching and filtering
    {
      name: "tags",
      title: "Tags",
      type: "array",
      options: {
        layout: "tags",
      },
      of: [
        {
          type: "string",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      description: "summary",
    },
    prepare({ title, description }) {
      return {
        title,
        description,
        media,
      };
    },
  },
};
