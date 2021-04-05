//TODO: Icons
import { RiCheckboxMultipleBlankLine as icoPosts2 } from "react-icons/ri";

export default {
  name: "post",
  type: "document",
  title: "Blog Post",
  icon: icoPosts2,
  fieldsets: [
    {
      name: "info",
      title: "Basic Info",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 2, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: "media",
      title: "Media",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: "content",
      title: "Content",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
  ],

  fields: [
    {
      name: "title",
      type: "string",
      title: "Blog Post Title",
      description:
        "Titles should be catchy, descriptive, and not too long. The title is also used to generate a unique slug.",
      validation: (Rule) =>
        Rule.error("Please fill out the Blog Title.").required(),
        fieldset:"info",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Required to generate the blog post unique URL and context within overall content model to be able to show the post.",
      validation: (Rule) =>
        Rule.error(
          "You must generate a slug so that the frontend can query and render the blog post."
        ).required(),
      options: {
        source: "title",
        maxLength: 96,
      },
      fieldset:"info",
    },   
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description:
        "This can be used to schedule post for publishing, sorting and searching for posts.",
      validation: (Rule) => Rule.error("You must provide a date.").required(),
      fieldset:"info",
    },
    {
      name: "tags",
      type: "tags",
      title: "Tags",
      fieldset:"info",
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main Image",
      description:
        "Main image used for the post used on blog cards and summary pages. Other images can be included when writing the body post.",
      validation: (Rule) =>
        Rule.error("Please provide a main image for the post.").required(),
        fieldset:"media",
    },
    {
      name: "excerpt",
      type: "text",
      title: "Excerpt",
      description:
        "A short description of what the article is about. This ends up on cards and summary blog pages.",
        fieldset:"content",
    }, 
    {
      name: "body",
      type: "array",
      title: "Body",
      description:
        "The content for your Blog Post. Words, images, videos and other content.",
      of: [{ type: "block" }],
      fieldset:"content",
    },
    {
      name: "authors",
      title: "Authors",
      type: "array",
      description:
        "Add in one or more authors that contributed to this blog post.",
      validation: (Rule) =>
        Rule.error("Please select at least one post Author.").required(),
      of: [
        {
          type: "reference",
          to: [{ type: "teamMember" }],
        },
      ],
    },

   
  ],
  orderings: [
    {
      name: "publishingDateAsc",
      title: "Publishing date new–>old",
      by: [
        {
          field: "publishedAt",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "publishingDateDesc",
      title: "Publishing date old->new",
      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "mainImage",
    },
    prepare({ title = "No title", publishedAt, slug = {}, media }) {
      const path = `/blog/${slug.current}`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : "Missing publishing date",
      };
    },
  },
};
