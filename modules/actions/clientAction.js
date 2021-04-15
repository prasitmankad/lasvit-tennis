import { actionKeys } from "./actionTypes";

// AWS amplify functions : AUTH
export function getClientDetailAction() {
  return {
    type: actionKeys.GET_CLIENT_DETAIL_REQUEST,
  };
}

export function getClientDetail(client) {
  return {
    type: actionKeys.GET_CLIENT_DETAIL_SUCCESS,
    payload: client,
  };
}

export function clientSignInAction(provider) {
  return {
    type: actionKeys.CLIENT_SIGN_IN,
    payload: { provider },
  };
}

export function clientSignOutAction() {
  return {
    type: actionKeys.CLIENT_SIGN_OUT,
  };
}

// APP function
export function toogleLoading(loading) {
  return {
    type: actionKeys.SET_LOADING,
    payload: loading,
  };
}
