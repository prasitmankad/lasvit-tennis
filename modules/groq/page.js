import { globalPageQuery } from "./common";

export const pageDataQuery = `*[(_type == "page" && slug["current"]==$slug && !(_id in path('drafts.**')))][0] {
  slug,
  title,
  'sections':content[]{
    ...,
    buttons[]{
      ...,
      links {...,route->{slug}}
    },
    link {...,text,link->{slug}},
    'team': *[(_type == "teamMember" && !(_id in path('drafts.**')))] {
      name, position, shortDescription, image[], longDescription
    }, 
    body{
      ...,
      markDefs[]{
        ...,
        _type == "linkBlog" => {
          "slug": @.reference->slug
        }
      }
    }
  },
  'recentPosts': *[_type=="post" && !(_id in path('drafts.**'))]| order(publishedAt desc)[0..2]{
    _id,
  author->{image,name},
  excerpt,
  mainImage,
  publishedAt,
  slug,
  tags,
  title,
  }
}`;

export const pageCollection = `{
  'globalData': ${globalPageQuery},
  'pageData': ${pageDataQuery}
}`;
