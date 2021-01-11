export default {
    type: "object",
    name: "uiContact",
    title: "Contact Section",
  
    fieldsets: [
      {
        name: "descriptor",
        title: "Contact Us Section",
        description:
          "Section to provide a location and a form for site visitors to contact you. The contact form is included by default.",
      },
    ],
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
        description: "Title for the section.",
        fieldset: "descriptor",
      },
      {
        name: "subtitle",
        type: "string",
        title: "Subtitle",
        description: "Subtitle for the section.",
        fieldset: "descriptor",
      },
      {
        name: "paragraph",
        type: "bodyPortableText",
        description: "Paragraph text for the section.",
        fieldset: "descriptor",
      },
      {
        name: "address",
        type: "string",
        title: "Address",
        description: "Location of the address used on contact us page on the frontend.",
      },    
      {
        name: "location",
        type: "geopoint",
        title: "Location",
        description: "Location of office used on any maps on the frontend.",
      },
    ],
    preview: {
      select: {
        title: "title",
        disabled: "disabled",
      },
      prepare({ title }) {
        return {
          title: `${title}`,
        };
      },
    },
  };
  