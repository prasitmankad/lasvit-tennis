export default {
  name: "page",
  type: "document",
  title: "Page",
  fieldsets: [
    {
      title: "SEO & metadata",
      name: "metadata",
    },
  ],
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Required to generate the page unique URL. Some frontends also require this for accurate context within the overall content model to be able to show the page.',
      validation: Rule => Rule.error('You must generate a slug so that the frontend can query and render the page.').required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "content",
      type: "array",
      title: "Page sections",
      of: [
        { type: "uiRecentPosts" },
        { type: "textSection" },
        { type: "uiHero" },
        { type: "uiFeatureList" },
        { type: "uiPlainContentBlock" },
        { type: "uiCTA" },
        { type: "uiContact" },
        { type: "uiTeam" },
        { type: "uiEmailNewsletter" },
      ],
    },
    // {
    //   name: "description",
    //   type: "text",
    //   title: "Description",
    //   description: "This description populates meta-tags on the webpage",
    //   fieldset: "metadata",
    // },
    // {
    //   name: "openGraphImage",
    //   type: "image",
    //   title: "Open Graph Image",
    //   description: "Image for sharing previews on Facebook, Twitter etc.",
    //   fieldset: "metadata",
    //   options: { hotspot: true },
    // },
  ],

  preview: {
    select: {
      title: "title",
      media: "openGraphImage",
    },
  },
};
