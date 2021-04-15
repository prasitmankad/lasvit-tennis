import { actionKeys } from "./actionTypes";

// AWS amplify functions : API
export function fetchBillingListAction() {
  return {
    type: actionKeys.FETCH_BILLING_LIST_REQUEST,
  };
}

export function fetchBillingList(billing) {
  return {
    type: actionKeys.FETCH_BILLING_LIST_SUCCESS,
    payload: { billing },
  };
}

export function createBillingAction() {
  return {
    type: actionKeys.CREATE_BILLING_REQUEST,
  };
}
