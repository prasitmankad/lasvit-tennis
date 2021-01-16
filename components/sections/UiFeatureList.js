import { useState } from "react";
import { PortableText, urlFor } from "../../utils/sanity";

function UiFeatureList({ _id, title, subtitle, paragraph, features }) {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                {title}
              </h1>
              <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                {subtitle}
              </h2>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-700">
              {paragraph && (
                <PortableText blocks={paragraph} className="text-gray-700" />
              )}
            </p>
          </div>

          <div class="flex flex-wrap -m-4">
            {features && (
              <>
                {features.map((feature) => (
                  // <Feature {...feature} key={feature._key} />
                  <div key={feature._key} class="xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-gray-100 p-6 rounded-lg">
                      <img
                        class="h-40 rounded w-full object-cover object-center mb-6"
                        src={urlFor(feature.featureImage)
                          .auto("format")
                          .width(720)
                          .height(600)
                          .fit("crop")
                          .quality(80)
                          .url()}
                        alt={
                          feature.featureImage?.alt ||
                          `Photo of ${feature.featureImage.caption}`
                        }

                        // src="https://dummyimage.com/720x400"
                        // alt="content"
                      />
                      <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                        {feature.featureSubtitle}
                      </h3>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                        {feature.featureTitle}
                      </h2>
                      <p class="leading-relaxed text-base">
                        {feature.featureDescription && (
                          <p class="leading-relaxed text-base mb-4">
                            <PortableText
                              blocks={feature.featureDescription}
                              className="text-gray-700"
                            />
                          </p>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default UiFeatureList;
