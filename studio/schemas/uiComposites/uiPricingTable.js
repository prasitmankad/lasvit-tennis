/*
section heading
section subheading
section paragraph
pricing card
    - mark important / special border e.g. "popular"
    - product name
    - price
    - frequency
    - separator (slash or "per")
    - key features listed
    - cta button or link
*/

export default {
    type: 'object',
    name: 'uiPricingTable',
    title: 'Pricing Table Section',
    fields: [
      {
        type: 'string',
        name: 'title'
      },
      {
        type: 'string',
        name: 'subtitle'
      },
      {
        type: 'string',
        name: 'paragraph'
      },
    ],
    preview: {
      select: { title: 'title' },
      prepare({ title }) {
        return {
          title: `Pricing module: ${title}`
        }
      }
    }
  }
  