import PropTypes from "prop-types";
import Cta from "./Cta";
import { PortableText, urlFor } from "../../utils/sanity";

function uiPlainContentBlock(props) {
  const { title, subtitle, paragraph } = props;
  return (
    <>
      {/* Plain Content Block - Centered */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {title}
            </h1>
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {subtitle}
            </h2>
            <p className="mb-8 leading-relaxed text-gray-800">
              {paragraph && (
                  <PortableText blocks={paragraph} className="text-gray-700" />
              )}
            </p>
          </div>
        </div>
      </section>


    </>
  );
}

export default uiPlainContentBlock;
