import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function Cta(props) {
  const { title, route, link } = props;

  if (route && route.slug && route.slug.current) {
    return (
      // it's an internal link to a page
      <Link href={`/${route.slug.current}`}>
        <a>
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg items-center">
            {title}
            <svg
              className="w-4 h-4 ml-5"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="3"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </a>
      </Link>
      
    );
  }

  // it's a hyperlink
  if (link) {
    return (
      <a href={link}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg items-center">
          {title}
          <svg
            className="w-4 h-4 ml-5"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="3"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </a>
    );
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
