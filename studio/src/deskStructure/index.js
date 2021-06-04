import S from "@sanity/desk-tool/structure-builder";
import { RiListSettingsLine } from "react-icons/ri";

import PagePreview from "../previews/pagePreview";
import PostPreview from "../previews/postPreview";
import CoursePreview from "../previews/coursePreview";

// Hide document types that we already have a structure definition for so that they don't appear in root structure but our customized structure
const hiddenDocTypes = (listItem) =>
  ![
    "page",
    "post",
    "course",
    "module",
    "contentItem",
    "route",
    "globalSettings",
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("The Running Klub")
    .items([
      //...S.documentTypeListItems().filter(hiddenDocTypes),

      // Global Config
      S.listItem()
        .title("Global")
        .icon(RiListSettingsLine)
        .child(
          S.document()
            .title("Global")
            .schemaType("globalSettings")
            .documentId("globalSettings")
        ),

      // Pages
      S.listItem()
        .title("Pages")
        .schemaType("page")
        .child(
          S.documentList().title("Static Pages").filter('_type == "page"')
        ),

      // Posts
      S.listItem()
        .title("Blog")
        .schemaType("post")
        .child(S.documentList().title("Blog Posts").filter('_type == "post"')),

      // Course
      S.listItem()
        .title("Courses")
        .schemaType("course")
        .child(
          S.list()
            .title("Course Catalog")
            .items([
              S.documentTypeListItem("course").title("Courses"),
              S.documentTypeListItem("module").title("Modules"),
              S.documentTypeListItem("contentItem").title("Content Items"),
              S.documentTypeListItem("faq").title("FAQs"),
            ])
        ),

      // Team Members
      S.listItem()
        .title("Team")
        .schemaType("teamMember")
        .child(
          S.documentList().title("Team Members").filter('_type == "teamMember"')
        ),
    ]);

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (props.schemaType === "default") {
    return S.document().views(
      Structure.getDocumentNodeViewsForSchemaType(props.schemaType)
    );
  }
  if (schemaType === "course") {
    return S.document().views([
      S.view.form(),
      S.view.component(CoursePreview).title("Preview Mode"),
    ]);
  }
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),
      S.view.component(PostPreview).title("Preview Mode"),
    ]);
  }

  return S.document().views([S.view.form()]);
};
