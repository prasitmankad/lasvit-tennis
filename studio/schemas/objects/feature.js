/*
title
subtitle
section paragraph
max columns
features array
    - feature title / name
    - feature description
    - feature subtitle
    - image or icon
    - cta
*/

export default {
  title: "Feature",
  name: "feature",
  type: "object",
  description:
    "Data fields for a given Feature, Service Offer etc. that can be used and presented in a multi-column layout.",
  fields: [
    {
      title: "Feature Title",
      name: "featureTitle",
      type: "string",
      description: "Feature Title or Name",
    },
    {
      name: "featureSubtitle",
      type: "string",
      description: "Subtitle for the feature.",
    },
    {
      name: "featureDescription",
      type: "simpleBlockContent",
      description: "Paragraph for the feature.",
    },
    {
      name: "featureCTA",
      type: "cta",
      title: "Call to action",
      description:
        "Include a link to another page for a more detailed description of the service.",
    },
    {
      name: "featureImage",
      type: "mainImage",
      title: "Image to use and show for the feature",
      description: "Image used for the hero section.",
      validation: (Rule) =>
        Rule.error("Please provide an image for the feature.").required(),
    },
  ],
};
