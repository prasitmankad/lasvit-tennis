/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

import {
  RiStackLine as icoPage,
  RiGitCommitLine as icoLink,
  RiVideoChatLine as icoInternalVid,
  RiPagesLine as icoLinkBlog,
  RiMacbookLine as icoLinkCourse, 
} from "react-icons/ri";
import ExternalLinkRenderer from '../components/ExternalLinkRenderer'

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: "linkBlog",
            type: "object",
            title: "Link to Page or Blog Post",
            icon: icoLinkBlog,
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                description: "Start typing to search for an existing page or blog post.",
                to: [
                  { type: "post" },
                  { type: "page" },
                  // other types you may want to link to
                ],
              },
            ],
          },
          {
            name: "linkCourse",
            type: "object",
            title: "Link to Course",
            icon: icoLinkCourse,
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                to: [
                  { type: "course" },
                  //{ type: "url" },
                  // other types you may want to link to
                ],
              },
            ],
          },

          {
            title: "URL",
            name: "link",
            type: "object",
            blockEditor: {
              render: ExternalLinkRenderer
            },
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    // to create new type of inline object, eg. course, page block etc.
    {
      type: "image",
      options: { hotspot: true },
    },
    {
      type: "videoEmbed",
      options: { hotspot: true },
      description: "Supports YouTube and Vimeo Links"
    },
    // TODO: Include other embeds - facebook, instagram
  ],
};
