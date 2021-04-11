import PropTypes from "prop-types";
import Cta from "./Cta";
import { PortableText, urlFor } from "../../utils/sanity";

function heroSection(props) {
  const { title, subtitle, tagline, paragraph, mainImage, ctas } = props;
  return (
    <>

    
      {/* HERO SECTION */}
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              src={urlFor(props.mainImage)
                .auto("format")
                .width(720)
                .height(600)
                .fit("crop")
                .quality(80)
                .url()}
              alt={
                props.mainImage?.alt || `Photo of ${props.mainImage.caption}`
              }
              class="object-cover object-center rounded"
            />

            {/* <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            /> */}
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-bold">
              {props.title}
            </h1>
            <h2 class="title-font sm:text-1xl text-2xl mb-4 font-medium text-gray-900">
              {props.subtitle}
            </h2>

            <p class="mb-8 leading-relaxed text-gray-800">
              {paragraph && (
                <PortableText
                  blocks={paragraph}
                  className="text-gray-700"
                />
              )}
            </p>

            <div class="flex justify-center">
              {ctas && (
                <div>
                  {ctas.map((cta) => (
                    <Cta {...cta} key={cta._key} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default heroSection;
