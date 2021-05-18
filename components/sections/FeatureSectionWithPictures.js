export function FeatureSectionWithPictures({ content }) {
  const { features } = content;

  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      {features.map((feature) => {
        return feature.imageLocation === "right"
          ? RigtCard(
              feature.featureName,
              feature.longDescription,
              feature.mainImage.url.url
            )
          : LeftCard(
              feature.featureName,
              feature.longDescription,
              feature.mainImage.url.url
            );
      })}
    </div>
  );
}

const RigtCard = (title, description, imgUrl) => (
  <div key={title} className="relative mt-24">
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {title}
            </h2>
            <p className="mt-4 text-lg text-gray-500">{description}</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <img
            className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            src={imgUrl}
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
);

const LeftCard = (title, description, imgUrl) => (
  <div className="mt-24">
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {title}
            </h2>
            <p className="mt-4 text-lg text-gray-500">{description}</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
        <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <img
            className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
            src={imgUrl}
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
);
