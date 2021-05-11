import { globalPageQuery } from "./common";

export const pageDataQuery = `*[(_type == "post"  && !(_id in path('drafts.**')))] | order(_publishedAt desc) {
  _id,
  author->{image,name},
  excerpt,
  mainImage,
  publishedAt,
  slug,
  tags,
  title,
}`;

export const pageDetailQuery = `*[_type == "post" && slug.current == $slug && !(_id in path('drafts.**'))][0] {
  _id,
  author,
  excerpt,
  mainImage{
    ...,
    "url": asset->{url}
  },
  publishedAt,
  slug,
  tags,
  body,
  title,
}`;

export const postCollection = `{
  'globalData': ${globalPageQuery},
  'pageData': ${pageDataQuery}
}`;

export const postDetail = `{
  'globalData': ${globalPageQuery},
  'pageData': ${pageDetailQuery}
}`;

export const postList = `*[_type == "post" && defined(slug.current)]{"params": {"id": slug.current}}`;
