//TODO: Icons
export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Blog Post Title',
      description: 'Titles should be catchy, descriptive, and not too long. The title is also used to generate a unique slug.',
      validation: Rule => Rule.error('Please fill out the Blog Title.').required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Required to generate the blog post unique URL. Some frontends also require this for accurate context within the overall content model to be able to show the post.',
      validation: Rule => Rule.error('You must generate a slug so that the frontend can query and render the blog post.').required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing, sorting and searching for posts.',
      validation: Rule => Rule.error('You must provide a date.').required(),
    },
    {
      name: 'postImage',
      type: 'mainImage',
      title: 'Main or  Headline Image',
      description: 'Banner image used for the post. Other images can be included when writing the body post.',
      validation: Rule => Rule.error('Please provide an imagefor the post.').required(),
    },
    {
      name: 'excerpt',
      type: 'simpleBlockContent',
      title: 'Excerpt',
      description:
        'A short description of what the article is about. This ends up on summary blog pages.',
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      description:'Add in one or more authors that contributed to this blog post.',
      validation: Rule => Rule.error('Please select at least one post Author.').required(),
      of: [
        {
          type: 'authorReference',
        },
      ],
    },
    // { TODO: Add later if relevant
    //   name: 'categories',
    //   type: 'array',
    //   title: 'Categories',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: {
    //         type: 'category',
    //       },
    //     },
    //   ],
    // },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body',
      description: 'The content for your Blog Post. Words, images, videos and other content.',
    },
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'postImage',
    },
    prepare({ title = 'No title', publishedAt, slug = {}, media }) {
      const path = `/blog/${slug.current}`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date',
      }
    },
  },
}
