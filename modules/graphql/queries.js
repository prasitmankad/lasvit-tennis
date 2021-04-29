/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClientBilling = /* GraphQL */ `
  query GetClientBilling($id: ID!) {
    getClientBilling(id: $id) {
      id
      courseId
      name
      amount
      currency
      period
      priceType
      payload {
        id
        created
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listClientBillings = /* GraphQL */ `
  query ListClientBillings(
    $filter: ModelClientBillingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientBillings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        courseId
        name
        amount
        currency
        period
        priceType
        payload {
          id
          created
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
