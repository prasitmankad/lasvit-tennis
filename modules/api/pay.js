import { config } from "./config";
import fetch from "isomorphic-unfetch";

export async function postToken(token, amount) {
  const res = await fetch(config.stripe.apiUrl, {
    method: "POST",
    body: JSON.stringify({
      token,
      charge: {
        amount,
        currency: config.stripe.currency,
      },
    }),
  })
    .then((response) => {
      response.json();
    })
    .catch((err) => {
      console.error("[pay error]", err);
    });

  return res;
}
