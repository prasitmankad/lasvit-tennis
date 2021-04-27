import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { PortableText, urlFor } from "../../utils/sanity";

function faqSection(props) {
  return (
    <React.Fragment>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading2 text-3xl font-extrabold text-gray-900">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Can’t find the answer you’re looking for? Reach out to our{" "}
                <Link href="">
                  <a className="font-medium text-indigo-600 hover:text-indigo-500">
                    customer support
                  </a>
                </Link>{" "}
                team.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-12">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How do you make holy water?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    You boil the hell out of it. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quas cupiditate laboriosam
                    fugiat.
                  </dd>
                </div>
                {/* More items... */}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default faqSection;
