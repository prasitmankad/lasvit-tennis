import React from "react";
import { urlFor } from "../../utils/sanity";

export function MajorCourseFeatures({ content }) {
  const { features } = content;

  return (
    <React.Fragment>
      {features &&
        features.map((feature) => (
          // location left
          <>
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                    src={urlFor(feature.mainImage)
                      .auto("format")
                      .width(400)
                      .height(400)
                      .fit("crop")
                      .quality(100)}
                    alt={feature.mainImage?.alt || ``}
                  />

                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h1 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-900 text-3xl title-font font-medium mb-1">
                      {feature.featureName}
                    </h1>

                    <p className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl leading-relaxed">
                      {feature.longDescription}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        ))}

      {/* ALTERNATING IMPLEMENTATION */}
      {/* {features &&
        features.map((feature) => (
          <>
            {feature.imageLocation === "right" ? (
              // location left
              <>
                <section className="text-gray-600 body-font overflow-hidden">
                  <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                      <img
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src={urlFor(feature.mainImage)
                          .auto("format")
                          .width(400)
                          .height(400)
                          .fit("crop")
                          .quality(100)}
                        alt={feature.mainImage?.alt || ``}
                      />

                      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-900 text-3xl title-font font-medium mb-1">
                          {feature.featureName}
                        </h1>

                        <p className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl leading-relaxed">
                          {feature.longDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            ) : (
              // location right
              <>
                <section className="text-gray-600 body-font overflow-hidden">
                  <div className="container px-5 py-10 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h1 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-900 text-3xl title-font font-medium mb-4">
                          {feature.featureName}
                        </h1>

                        <p className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl leading-relaxed mb-4">
                          {feature.longDescription}
                        </p>
                      </div>
                      <img
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src={urlFor(feature.mainImage)
                          .auto("format")
                          .width(400)
                          .height(400)
                          .fit("crop")
                          .quality(100)}
                        alt={feature.mainImage?.alt || ``}
                      />
                    </div>
                  </div>
                </section>
              </>
            )}
          </>
        ))} */}
    </React.Fragment>
  );
}
