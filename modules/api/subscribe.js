import { config } from "./config";
import fetch from "isomorphic-unfetch";

export async function postSubscribe(kind, email) {
  const res = await fetch(config.subscribe.apiUrl, {
    method: "POST",
    body: JSON.stringify({
      kind,
      email,
    }),
  })
    .then((response) => response.json()
    )
    .catch((err) => {
      console.error("[subscribe error]", err);
    });

  return res;
}
