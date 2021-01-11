export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Unique reference for the Author. Also some frontends will require a slug to be set to be able to show the person.',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: "headline",
      type: "string",
      title: "Headline / Tagline",
      description:
        "1 sentence description of your qualifications or leadin headline / tagline.",
      validation: (Rule) =>
        Rule.warning("Please fill out the field.").required(),
    },
    {
      name: 'bio',
      type: 'simpleBlockContent',
      title: 'Biography',
      description: 'Try and keep it to 1-2 paragraphs.'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
