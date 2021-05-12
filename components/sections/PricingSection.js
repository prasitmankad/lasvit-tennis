import React from "react";
import { CheckIcon as CheckIconSolid } from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";
import { Currency } from "../../translations/config";
import { getLanguage } from "../../translations/utils";
import { PayButton } from "../courses/PayButton";

export function PricingSection({ payCourse, pricing, features = ["todo"] }) {
  const { t } = useTranslation();

  const price = React.useMemo(
    () => pricing.prices.find((p) => p.currency === Currency[getLanguage()]),
    [getLanguage()]
  );

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {price && (
        <div className="max-w-7xl mx-auto p-24 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center mt-12 space-y-4 sm:mt-16 sm:space-y-0 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
            <div
              key={pricing.heading}
              className="flex-1 mx-4 border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 max-w-sm"
            >
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  {pricing.heading}
                </h2>
                <p className="mt-4 text-sm text-gray-500">{pricing.content}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {price.symbol}
                    {price.value}
                  </span>

                  {/* <span className="text-base font-medium text-gray-500">/mo</span> */}
                </p>

                <PayButton
                  amount={price.value}
                  currency={price.currency}
                  payCourse={(token) =>
                    payCourse(token, {
                      ...price,
                      frequency: pricing.billingFrequency,
                      type: pricing.subheading,
                    })
                  }
                />
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  {t("courses.features")}
                </h3>
                <ul className="mt-6 space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIconSolid
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
