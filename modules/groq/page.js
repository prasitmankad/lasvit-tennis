export const query = `{
  'globalData': *[(_type == "globalSettings" && !(_id in path('drafts.**')))][0] {
	  businessInfo {
      title, 
      tagline, 
      siteDescription, 
      contact,
      'teamMembers': *[(_type == "teamMember" && !(_id in path('drafts.**')))] {
        name, position, shortDescription, image[], longDescription
      },      
    },
    branding,
    header {
      menu [] {
        ...,link-> {
            slug,title
            }
      }
    },
    footer {
      signup,
      columns [] {
        heading,links[]->{
          slug,
          title
        }
      }
    },
    siteSettings{...,homepage->{slug,title}},
	},
  'pageData': *[(_type == "page" && slug["current"]==$slug && !(_id in path('drafts.**')))][0] {
    slug,
    title,
    'sections':content[]{
      ...,
      buttons[]{
        ...,
        links {route->{slug}}
      },
      link {text,link->{slug}},
      'team': *[(_type == "teamMember" && !(_id in path('drafts.**')))] {
        name, position, shortDescription, image[], longDescription
      }, 
      body[]{
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
  }
}`;
