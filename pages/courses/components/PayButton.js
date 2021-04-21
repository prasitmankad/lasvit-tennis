import React from "react";
import PropTypes from "prop-types";
import StripeCheckout from "react-stripe-checkout";
import { config } from "../../../modules/api/config";

export function PayButton({ type, amount, payCourse }) {
  return (
    <StripeCheckout
      name={`Buy ${type}`}
      token={payCourse}
      amount={amount * 100}
      currency={config.stripe.currency}
      stripeKey={config.stripe.apiKey} // Stripe publishable API Key
      allowRememberMe={false}
    >
      <div className="mt-8 block w-full bg-purple-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-purple-700">
        Buy {type}
      </div>
    </StripeCheckout>
  );
}

PayButton.propTypes = {
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  payCourse: PropTypes.func.isRequired,
};
