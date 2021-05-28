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

export function clientCustomSignIn(email, password) {
  return {
    type: actionKeys.CLIENT_CUSTOM_SIGN_IN,
    payload: { email, password },
  };
}

export function clientCustomSignUp(data) {
  return {
    type: actionKeys.CLIENT_CUSTOM_SIGN_UP,
    payload: { data },
  };
}

export function clientCustomConfirmSignUp(email, authCode, password) {
  return {
    type: actionKeys.CLIENT_CUSTOM_CONFIRM_SIGN_UP,
    payload: { email, authCode, password },
  };
}

export function clientCustomForgotPassword(email) {
  return {
    type: actionKeys.CLIENT_CUSTOM_FORGOTPASSWORD,
    payload: { email },
  };
}

export function clientCustomForgotPasswordSubmit(email, authCode, password) {
  return {
    type: actionKeys.CLIENT_CUSTOM_FORGOTPASSWORD_SUBMIT,
    payload: { email, authCode, password },
  };
}

export function clientCustomLoginFail(fail) {
  return {
    type: actionKeys.CLIENT_CUSTOM_LOGIN_FAIL,
    payload: fail,
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
