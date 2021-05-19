import React from "react";
import PropTypes from "prop-types";
import StripeCheckout from "react-stripe-checkout";
import { config } from "../../modules/api/config";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { showLoginModalAction } from "../../modules/actions/clientAction";
import { useClient } from "../../hooks/useClient";

export function PayButton({ amount, currency, payCourse }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { client } = useClient();

  return (
    <>
      {client ? (
        <StripeCheckout
          name={t("courses.payButton")}
          token={payCourse}
          amount={amount * 100}
          currency={currency}
          stripeKey={config.stripe.apiKey} // Stripe publishable API Key
          allowRememberMe={false}
        >
          <div
            className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 cursor-pointer"

          // className="mt-8 w-full bg-indigo-600 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-indigo-700 sm:mt-10 sm:w-auto xl:mt-0 "
          >
            {t("courses.payButton")}
          </div>
        </StripeCheckout>
      ) : (
        <div
          onClick={() => dispatch(showLoginModalAction(true))}
          className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 cursor-pointer"
        >
          {t("courses.payButton")}
        </div>
      )}
    </>
  );
}

PayButton.propTypes = {
  amount: PropTypes.number.isRequired,
  payCourse: PropTypes.func.isRequired,
};
