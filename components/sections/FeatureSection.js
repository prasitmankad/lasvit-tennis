import { CheckIcon as CheckIconOutline } from "@heroicons/react/outline";

export function FeatureSection({ content }) {
  const { features } = content;

  console.log("[]", features);
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
        {features.map((feature) => (
          <div key={feature.name} className="relative">
            <dt>
              <CheckIconOutline
                className="absolute h-6 w-6 text-green-500"
                aria-hidden="true"
              />
              <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                {feature.featureName}
              </p>
            </dt>
            <dd className="mt-2 ml-9 flex text-base text-gray-500 lg:py-0 lg:pb-4">
              {feature.shortDescription}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
