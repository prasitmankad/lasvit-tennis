import PropTypes from "prop-types";
import { PortableText, urlFor } from "../../utils/sanity";
// TODO: add in videojs implementation
// https://videojs.com/getting-started/#videojs-cdn
// https://github.com/vercel/next.js/tree/canary/examples/with-videojs
// https://codepen.io/heff/pen/EarCt
// https://github.com/mister-ben/videojs-mobile-ui#readme

function sneakPeekSection(props) {
  return (
    <React.Fragment>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center pb-20">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Sneak Peek
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Take a look at just some of the videos available to you in this
              course.
            </p>
          </div>
          <React.Fragment>
            {/* This example requires Tailwind CSS v2.0+ */}
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {/* More items... */}
              <li>
                <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                  <img
                    className="object-cover object-center w-full h-64"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80"
                    alt="avatar"
                  />

                  <div className="px-6 py-4">
                    <h1 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading1 text-gray-800">
                      Video Topic
                    </h1>
                    <p className="py-2 text-gray-700 dark:text-gray-400">
                      Video short description from the Content Item CMS.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </React.Fragment>
        </div>
      </div>
    </React.Fragment>
  );
}

export default sneakPeekSection;
