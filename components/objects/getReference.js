// form mini-query and return reference?


import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";


const query = `{
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
          heading,links[]->
        }
      },
      siteSettings
      },
    'pageData': *[(_type == "page" && title=="Home" && !(_id in path('drafts.**')))][0] {
      slug,
      title,
      'sections':content,
      'recentPosts': *[_type=="post" && !(_id in path('drafts.**'))]| order(publishedAt desc)[0..2]
    }
  }`;


function getReference(props) {
  const { title, route, link } = props;

  if (route && route.slug && route.slug.current) {
    return (
      <Link href={`/${route.slug.current}`}>
        <a>{title}</a>
      </Link>
    );
  }

  if (link) {
    return <a href={link}>{title}</a>;
  }

  return <a>{title}</a>;
}

Cta.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.shape({
    slug: PropTypes.shape({
      current: PropTypes.string,
    }),
  }),
  link: PropTypes.string,
};

export default Cta;


export async function getStaticProps({ params = {}, preview = false }) {
    var allData = await getClient(preview).fetch(query);
  
    return {
      props: { preview, allData },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second
      revalidate: 1, // In seconds
    };
  }
  