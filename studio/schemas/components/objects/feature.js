export default {
  title: "Feature",
  name: "feature",
  type: "object",
  description:
    "Data fields for a given Feature, Service Offer etc. that can be used and presented in a multi-column layout.",

  fieldsets: [ 
    {
      name: "image",
      title: "Feature Image Settings",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: "details",
      title: "Feature Details",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
  ],
  fields: [

    {
      title: "Main Feature",
      name: "mainFeature",
      type: "boolean",
      description:
        "Select if this feature should be called out. Will embiggen the feature instead of just listing it.",
      // options: {
      //   list: [
      //     { title: "Video", value: "video" },
      //     { title: "Article", value: "article" },
      //     { title: "File", value: "file" },
      //   ], // <-- predefined values
      //layout: 'radio' // <-- defaults to 'dropdown'
      // },
    },
    {
      name: "mainImage",
      type: "image",
      title: "Feature Image",
      required: true,
      fieldset: "image",
      options: {
        hotspot: true,
      },
      description:
        "The image should be either jpg or png. Preferably 3000 x 3000, minimum 1400 x 1400 pixels. Used on sales pages and course landing pages.",
    },

    {
      title: "Image Location",
      name: "imageLocation",
      type: "string",
      description:
        "Controls where the image is displayed. Used for Feature Detail layouts.",
      fieldset: "image",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
          { title: "Top Center", value: "topCenter" },
          { title: "Bottom Center", value: "bottomCenter" },
        ], // <-- predefined values
        //layout: 'radio' // <-- defaults to 'dropdown'
      },
    },
    {
      title: "Feature Name",
      name: "featureName",
      type: "string",
      description: "Feature Name",
      fieldset: "details",
    },

    {
      name: "shortDescription",
      type: "text",
      title: "Short Description",
      description:
        "1-2 sentences describing the feature. Used on summary lists.",
      validation: (Rule) =>
        Rule.warning("Please fill out the field.").required(),
      fieldset: "details",
    },
    {
      name: "longDescription",
      type: "text",
      title: "Long Description",
      description:
        "5-10 longer sentences describing the feature in more detail. Used for Feature detail sections.",
      validation: (Rule) =>
        Rule.warning("Please fill out the field.").required(),
      fieldset: "details",
    },


  ],
  preview: {
    select: {
      title: "featureName",
      description: "shortDescription",
      media: "mainImage",
    },
    prepare({ title, description,media }) {
      return {
        title,
        description,
        media,
      };
    },
  },
};
