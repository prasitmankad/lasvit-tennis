// course_module - describes sections in a course
export default {
    name: 'course_module',
    title: 'Module',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        required: true,
        description: 'Short title for this module.',
        type: 'string'
      },
      {
        name: 'subtitle',
        type: 'string',
        title: 'Subtitle',
      },
      {
        name: 'description',
        title: 'Description',
        description: `A module description containing one or more sentences describing this course module and what it covers. You can specify up to 4000 characters.`,
        type: 'text',
        validation: Rule => Rule.max(4000)
      },
      {
        name: 'course',
        description: 'Choose course(s) to publish this module in',
        type: 'array',
        of: [{ type: 'reference', weak: true, to: [{ type: 'course' }] }]
      },

    //   {
    //     name: 'linkList',
    //     title: 'Link list',
    //     description: 'A more structured way to add links for show notes. Will be compiled at the end of the episode content field in a podcast RSS feed',
    //     type: 'array',
    //     of: [
    //       {
    //         type: 'linkListItem'
    //       }
    //     ]
    //   },
      {
        name: 'slug',
        title: 'Module slug',
        type: 'slug',
        description: 'When you need to refer to your module in a url',
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
        name: 'tags',
        title: 'Tags',
        type: 'array',
        options: {
          layout: 'tags'
        },
        of: [
          {
            type: 'string'
          }
        ]
      },
      {
        name: 'coverArt',
        title: 'Cover art',
        type: 'image'
      },
    ],
    // orderings: [
    //   {
    //     title: 'Publish Date, New',
    //     name: 'publishDateDesc',
    //     by: [
    //       {field: 'schedule.publish', direction: 'desc'}
    //     ]
    //   },
    //   {
    //     title: 'Publish Date, Old',
    //     name: 'publishDateAsc',
    //     by: [
    //       {field: 'schedule.publish', direction: 'asc'}
    //     ]
    //   }
    // ],
    preview: {
      select: {
        title: 'title',
        // subtitle: 'podcast.0.title',
        description: 'description',
        media: 'coverArt',
        // schedule: 'schedule'
      },
      prepare({title,  description, media}) {
        return {
          title,
        //   esubtitle: `${new Date(schedule.publish).toDateString()} – ${subtitle}`,
          description,
          media,
        }
      }
    }
  };