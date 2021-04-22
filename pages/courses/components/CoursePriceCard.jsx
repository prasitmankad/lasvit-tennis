import { SvgIcon } from "./SvgIcon";
import { CurrencySymbol } from "../types";
import PropTypes from "prop-types";
import { PayButton } from "./PayButton";

export function CoursePriceCard({ price, payCourse }) {
  return (
    <div className="px-8">
      <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div className="p-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            {price.type}
          </h2>
          <p className="mt-4 text-sm text-gray-500">{price.description}</p>
          <p className="mt-8">
            <span className="text-4xl font-extrabold text-gray-900">
              {CurrencySymbol[`${price.currency}`]}
              {price.amount}
            </span>
            <span className="text-base font-medium text-gray-500">{`/${price.period}`}</span>
          </p>
          <PayButton
            type={price.type}
            amount={price.amount}
            payCourse={payCourse}
          />
        </div>

        <div className="pt-6 pb-8 px-6">
          <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
            What's included
          </h3>
          <ul className="mt-6 space-y-4">
            {price.icludes.map((icl, i) => {
              return (
                <li key={i} className="flex space-x-3">
                  <SvgIcon />
                  <span className="text-sm text-gray-500">{icl.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

CoursePriceCard.propTypes = {
  price: PropTypes.object.isRequired,
  payCourse: PropTypes.func.isRequired,
};
