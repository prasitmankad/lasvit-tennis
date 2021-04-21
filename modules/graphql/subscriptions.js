/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClientBilling = /* GraphQL */ `
  subscription OnCreateClientBilling($owner: String!) {
    onCreateClientBilling(owner: $owner) {
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
export const onUpdateClientBilling = /* GraphQL */ `
  subscription OnUpdateClientBilling($owner: String!) {
    onUpdateClientBilling(owner: $owner) {
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
export const onDeleteClientBilling = /* GraphQL */ `
  subscription OnDeleteClientBilling($owner: String!) {
    onDeleteClientBilling(owner: $owner) {
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
