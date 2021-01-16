import PropTypes from "prop-types";
import Cta from "./Cta";
import { PortableText, urlFor } from "../../utils/sanity";

function uiPlainContentBlock(props) {
  const { title, subtitle, paragraph } = props;
  return (
    <>
      {/* Plain Content Block - Centered */}
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {title}
            </h1>
            <h2 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {subtitle}
            </h2>
            <p class="mb-8 leading-relaxed text-gray-800">
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
