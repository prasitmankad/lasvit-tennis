import S from "@sanity/desk-tool/structure-builder";
import { MdWeb, MdSettings, MdWhatshot, MdLooks } from "react-icons/md";
import categories from "./categories";
import person from "./person";
import siteSettings from "./siteSettings";

import PagePreview from "../previews/pagePreview";
import PostPreview from "../previews/postPreview";
// Hide document types that we already have a structure definition for
const hiddenDocTypes = (listItem) =>
  ![
    "category",
    "person",
    "sampleProject",
    "siteSettings",
    "page",
    "route",
    "siteConfig",
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("Lasvit Tennis")
    .items([
      // S.documentTypeListItem("post").title("Posts"),
      S.listItem()
      .title("Pages")
      .icon(MdWeb)
      .child(
        S.list()
          .title("Pages")
          .items([
            S.documentTypeListItem("route").title("Routes"),
            S.documentTypeListItem("page").title("Pages"),
          ])
      ),
      S.listItem()
        .title("Website")
        .icon(MdWeb)
        .child(
          S.list()
            .title("Website")
            .items([
              S.listItem()
                .title("Site configuration")
                .icon(MdSettings)
                .child(
                  S.document()
                    .title("Site configuration")
                    .schemaType("siteConfig")
                    .documentId("siteConfig")
                ),

            ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
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
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),
      S.view.component(PostPreview).title("Preview Mode"),
    ]);
  }
  if (schemaType === "page") {
    return S.document().views([
      S.view.form(),
      S.view.component(PagePreview).title("Preview Mode"),
    ]);
  }

  return S.document().views([S.view.form()]);
};
