import PropTypes from "prop-types";
import { PortableText, urlFor } from "../../utils/sanity";

function pageHeadingSection(props) {
  return (
    <>
      <div className="bg-indigo-900">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Pricing Plans
              </h2>
              <p className="mt-5 text-xl text-indigo-300">
                Start building for free, then add a site plan to go live.
                Account plans unlock additional features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default pageHeadingSection;
