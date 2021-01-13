import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { PortableText, urlFor } from "../../utils/sanity";

function Feature(props) {
  const {
    featureTitle,
    featureSubtitle,
    featureDescription,
    featureImage,
    //featureCTA,
  } = props;

  return (
    <>
      
          <img
            class="h-40 rounded w-full object-cover object-center mb-6"
            src="https://dummyimage.com/720x400"
            alt="content"
          />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
            {featureSubtitle}
          </h3>
          <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            {featureTitle}
          </h2>

          {featureDescription && (
            <p class="leading-relaxed text-base mb-4">
              <PortableText
                blocks={featureDescription}
                className="text-gray-700"
              />
            </p>
          )}

    </>
  );
}

Feature.propTypes = {
  featureTitle: PropTypes.string.isRequired,
  featureSubtitle: PropTypes.string.isRequired,
  featureDescription: PropTypes.string.isRequired,
  //   route: PropTypes.shape({
  //     slug: PropTypes.shape({
  //       current: PropTypes.string,
  //     }),
  //   }),
  //   link: PropTypes.string,
};

export default Feature;
