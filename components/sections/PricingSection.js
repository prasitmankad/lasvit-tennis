import React from "react";
import { CheckIcon as CheckIconSolid } from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";
import { Currency } from "../../translations/config";
import { getLanguage } from "../../translations/utils";
import { PayButton } from "../courses/PayButton";
import { useLanguage } from "../../hooks/useLanguage";

export function PricingSection({ payCourse, pricing, features = ["todo"] }) {
  const { t } = useTranslation();
  const { l } = useLanguage();

  const price = React.useMemo(
    () => pricing.prices.find((p) => p.currency === Currency[getLanguage()]),
    [getLanguage()]
  );

  return (
    <React.Fragment>
      {price && (
        <div className="bg-gray-100">
          <div className="mt-8 bg-gray-100 pb-16 sm:mt-12 sm:pb-12 lg:pb-12">
            <div className="relative">
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto rounded-lg overflow-hidden lg:max-w-none lg:flex">
                  <div className="flex-1 bg-gray-100 px-6 py-8 lg:p-12">
                    <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                      {l(pricing.heading)}
                    </h3>
                    <p className="mt-6 text-base text-gray-500">
                      {l(pricing.content)}
                    </p>
                  </div>
                  <div className="py-8 px-6 text-center bg-gray-100 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                    <p className="text-lg leading-6 font-medium text-gray-900">
                      Pay once, own it forever
                    </p>
                    <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                      <span>
                        {price.symbol}
                        {price.value}
                      </span>
                      {/* <span className="ml-3 text-xl font-medium text-gray-500">
                      USD
                    </span> */}
                    </div>
                    <p className="mt-4 text-sm">
                      <a
                        href="/terms"
                        className="font-medium text-gray-500 underline"
                      >
                        Terms & Conditions
                      </a>
                    </p>
                    <div className="mt-6">
                      <div className="rounded-md shadow">
                        <PayButton
                          amount={price.value}
                          currency={price.currency}
                          payCourse={(token) =>
                            payCourse(token, {
                              ...price,
                              frequency: pricing.billingFrequency,
                              type: l(pricing.subheading),
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
