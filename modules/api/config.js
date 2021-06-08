export const config = {
  stripe: {
    currency: "CZK",
    apiKey:
      "my_PUBLISHABLE_stripekey",
    apiUrl:
      "https://v6djkdnzx0.execute-api.eu-central-1.amazonaws.com/prod/serverless/createCharge",
  },
  subscribe: {
    apiUrl:
      "https://qaa7my6q38.execute-api.eu-central-1.amazonaws.com/prod/serverless/subscribe",
  },
};
