import PropTypes from "prop-types";
import { PortableText, urlFor } from "../../utils/sanity";

function singlePriceSection(props) {
  return (
    <React.Fragment>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div>
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Everything you need
            </h2>
            <h1 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading1">
              <span className="text-gray-900">Everything you need for </span>
              <span className="text-indigo-600">$99 a month</span>
            </h1>
            <p className="mt-5 text-xl text-gray-500">
              Includes every feature we offer plus unlimited projects and
              unlimited users.
            </p>
          </div>
          <Link href=""><a
            
            className="mt-8 w-full bg-indigo-600 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-indigo-700 sm:mt-10 sm:w-auto xl:mt-0"
          >
            Get started today
          </a></Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default singlePriceSection;
