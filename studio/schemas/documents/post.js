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
        collapsible: true,
        collapsed: true,
        columns: 2,
      },
    },
    {
      name: "media",
      title: "Media",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
    },
    {
      name: "content",
      title: "Content",
      options: {
        collapsible: true,
        collapsed: false,
        columns: 1,
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
      validation: (Rule) => Rule.error("This field is required.").required(),
      fieldset: "info",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Required to generate the blog post unique URL and context within overall content model to be able to show the post.",
      validation: (Rule) => Rule.error("You must generate a slug.").required(),
      options: {
        source: "title",
        maxLength: 96,
      },
      fieldset: "info",
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description:
        "This can be used to schedule post for publishing, sorting and searching for posts.",
      validation: (Rule) => Rule.error("This field is required.").required(),
      fieldset: "info",
    },
    {
      name: "tags",
      type: "tags",
      title: "Tags",
      fieldset: "info",
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main Image",
      description:
        "Main image used for the post used on blog cards and summary pages. Other images can be included when writing the body post.",
      validation: (Rule) => Rule.error("This field is required.").required(),
      fieldset: "media",
    },
    {
      name: "excerpt",
      type: "text",
      title: "Excerpt",
      description:
        "A short description of what the article is about. This ends up on cards and summary blog pages.",
      fieldset: "content",
      validation: (Rule) => Rule.warning("This field is required.").required(),
    },
    {
      name: "body",
      type: "blockContent",
      title: "Body",
      fieldset: "content",
      validation: (Rule) => Rule.warning("This field is required.").required(),
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      description:
        "Add in one or more authors that contributed to this blog post.",
      validation: (Rule) => Rule.error("This field is required.").required(),
      to: [{ type: "teamMember" }],
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
