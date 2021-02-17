// course_module.js
export default {
    name: 'course',
    title: 'Course',
    description: 'Create and configure a Course',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        required: true,
        description:
          'Try to keep this short and succinct.'
      },
      {
        name: 'subtitle',
        type: 'string',
        description: 'That catchy tagline.'
      },
      {
        name: 'description',
        type: 'text',
        required: true,
        description:
          'What is this course all about? Used in landing pages, course landing page etc.'
      },
      {
        name: 'slug',
        title: 'Course Slug',
        type: 'slug',
        description: 'For when you need to refer to your course in a url.',
        options: {
          source: 'title',
          slugify: input =>
            input
              .toLowerCase()
              .replace(/\s+/g, '-')
              .slice(0, 200)
        }
      },

      {
        name: 'coverArt',
        title: 'Course Cover Image',
        type: 'image',
        required: true,
        description:
          'The image should be either jpg or png. Preferably 3000 x 3000, minimum 1400 x 1400 pixels. Used on sales pages and course landing pages.'
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'subtitle',
        description: 'description',
        media: 'coverArt'
      }
    }
  };