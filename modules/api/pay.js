import { config } from "./config";
import fetch from "isomorphic-unfetch";

export function postToken (token, data) {
return fetch(config.stripe.apiUrl, {
  method: "POST",
  body: JSON.stringify({
    token,
    charge: {
      amount: data.amount * 100,
      currency: data.currency,
    },
  }),
})
  .then((response) => {
    return response.json()
  })
  .catch((err) => {
    console.error("[pay error]", err);
    return err
  })
}