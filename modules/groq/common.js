export const globalPageQuery = `*[(_type == "globalSettings" && !(_id in path('drafts.**')))][0] {
  businessInfo {
    title, 
    tagline, 
    siteDescription, 
    contact,
    'teamMembers': *[(_type == "teamMember" && !(_id in path('drafts.**')))] | order(order asc) {
      order,name, position, shortDescription, image[], longDescription
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
        _type,
        slug,
        title
      }
    }
  },
  siteSettings{...,homepage->{slug,title}},
}`;
