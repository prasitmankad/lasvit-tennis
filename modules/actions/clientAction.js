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

export function showLoginModalAction(show) {
  return {
    type: actionKeys.LOGIN_MODAL,
    payload: show,
  };
}

// APP function
export function toogleLoading(loading) {
  return {
    type: actionKeys.SET_LOADING,
    payload: loading,
  };
}

export function setLanguageAction(language) {
  return {
    type: actionKeys.SET_LANGUAGE,
    payload: language,
  };
}
