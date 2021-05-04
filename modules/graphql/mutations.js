/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClientBilling = /* GraphQL */ `
  mutation CreateClientBilling(
    $input: CreateClientBillingInput!
    $condition: ModelClientBillingConditionInput
  ) {
    createClientBilling(input: $input, condition: $condition) {
      id
      courseId
      name
      amount
      currency
      symbol
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
export const updateClientBilling = /* GraphQL */ `
  mutation UpdateClientBilling(
    $input: UpdateClientBillingInput!
    $condition: ModelClientBillingConditionInput
  ) {
    updateClientBilling(input: $input, condition: $condition) {
      id
      courseId
      name
      amount
      currency
      symbol
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
export const deleteClientBilling = /* GraphQL */ `
  mutation DeleteClientBilling(
    $input: DeleteClientBillingInput!
    $condition: ModelClientBillingConditionInput
  ) {
    deleteClientBilling(input: $input, condition: $condition) {
      id
      courseId
      name
      amount
      currency
      symbol
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
