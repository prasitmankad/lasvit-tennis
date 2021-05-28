import { put, takeEvery } from "redux-saga/effects";
import { actionKeys, FederationTypes } from "../actions/actionTypes";
import { Auth } from "aws-amplify";
import {
  toogleLoading,
  getClientDetail,
  showLoginModalAction,
  clientCustomLoginFail,
  getClientDetailAction,
} from "../actions/clientAction";

import awsConfig from "../../aws-exports";

// AWS AUTH
function* handleClientDetail() {
  try {
    yield put(toogleLoading(true));
    let userDetail = null;
    yield Auth.currentAuthenticatedUser().then((user) => {
      const userObj = {};
      const attr = { ...user.attributes };
      let provider = !!attr.identities
        ? JSON.parse(attr.identities)[0].providerType
        : "";

      userObj.email = attr.email;
      userObj.name = attr.name;
      userObj.provider = provider;

      if (provider === FederationTypes.FACEBOOK) {
        const img = JSON.parse(attr.picture);
        userObj.img = img.data.url;
      } else {
        userObj.img = attr.picture;
      }

      userDetail = userObj;
    });

    yield put(getClientDetail(userDetail));
  } catch (error) {
    // console.error("[error handleClientDetail]", error);
  } finally {
    yield put(toogleLoading(false));
  }
}

function* handleClientSignIn(action) {
  try {
    yield put(toogleLoading(true));
    const { provider } = action.payload;
    yield Auth.federatedSignIn({ provider });
  } catch (error) {
    // console.error("[error handleClientSignIn]", error);
  }
}

function* handleClientSignOut() {
  try {
    yield put(toogleLoading(true));
    yield Auth.signOut();

    const redirectSignOut = awsConfig.oauth.redirectSignOut;
    window.location.replace(redirectSignOut);
  } catch (error) {
    // console.error("[error handleClientSignOut]", error);
  } finally {
    yield put(toogleLoading(false));
  }
}

function* handleClientCustomSignIn(action) {
  try {
    yield put(toogleLoading(true));
    const { email, password } = action.payload;
    yield Auth.signIn(email, password);
    yield put(showLoginModalAction(false));

    const redirectSignIn = awsConfig.oauth.redirectSignIn;
    if (window && !window.location.pathname.includes("/courses")) {
      window.location.replace(redirectSignIn);
    }
  } catch (error) {
    yield put(clientCustomLoginFail(true));
  } finally {
    yield put(getClientDetailAction());
    yield put(toogleLoading(false));
  }
}

function* handleClientCustomSignUp(action) {
  try {
    const { data } = action.payload;
    yield Auth.signUp(data);
  } catch (error) {
    //
  }
}

function* handleClientCustomConfirmSignUp(action) {
  try {
    yield put(toogleLoading(true));
    const { email, authCode, password } = action.payload;
    yield Auth.confirmSignUp(email, authCode);
    yield Auth.signIn(email, password);
    yield put(showLoginModalAction(false));

    const redirectSignIn = awsConfig.oauth.redirectSignIn;
    window.location.replace(redirectSignIn);
  } catch (error) {
    //
  } finally {
    yield put(getClientDetailAction());
    yield put(toogleLoading(false));
  }
}

function* handleClientCustomForgotPassword(action) {
  try {
    yield put(toogleLoading(true));
    const { email } = action.payload;
    yield Auth.forgotPassword(email);
  } catch (error) {
    //
  } finally {
    yield put(toogleLoading(false));
  }
}

function* handleClientCustomForgotPasswordSubmit(action) {
  try {
    yield put(toogleLoading(true));
    const { email, authCode, password } = action.payload;
    yield Auth.forgotPasswordSubmit(email, authCode, password);
  } catch (error) {
    //
  } finally {
    yield put(toogleLoading(false));
  }
}

export function* clientSagas() {
  yield takeEvery(actionKeys.GET_CLIENT_DETAIL_REQUEST, handleClientDetail);
  yield takeEvery(actionKeys.CLIENT_SIGN_IN, handleClientSignIn);
  yield takeEvery(actionKeys.CLIENT_SIGN_OUT, handleClientSignOut);
  yield takeEvery(actionKeys.CLIENT_CUSTOM_SIGN_IN, handleClientCustomSignIn);
  yield takeEvery(actionKeys.CLIENT_CUSTOM_SIGN_UP, handleClientCustomSignUp);
  yield takeEvery(
    actionKeys.CLIENT_CUSTOM_CONFIRM_SIGN_UP,
    handleClientCustomConfirmSignUp
  );
  yield takeEvery(
    actionKeys.CLIENT_CUSTOM_FORGOTPASSWORD,
    handleClientCustomForgotPassword
  );
  yield takeEvery(
    actionKeys.CLIENT_CUSTOM_FORGOTPASSWORD_SUBMIT,
    handleClientCustomForgotPasswordSubmit
  );
}
