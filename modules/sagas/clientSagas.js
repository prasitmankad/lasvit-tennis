import { put, takeEvery } from "redux-saga/effects";
import { actionKeys, FederationTypes } from "../actions/actionTypes";
import { Auth } from "aws-amplify";
import { toogleLoading, getClientDetail } from "../actions/clientAction";

// AWS AUTH
function* handleClientDetail() {
  try {
    yield put(toogleLoading(true));
    let userDetail = null;
    yield Auth.currentAuthenticatedUser().then((user) => {
      const userObj = {};
      const attr = { ...user.attributes };
      const provider = JSON.parse(attr.identities)[0].providerType;

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
    console.log("[error handleClientDetail]", error);
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
    console.log("[error handleClientSignIn]", error);
  }
}

function* handleClientSignOut() {
  try {
    yield put(toogleLoading(true));
    yield Auth.signOut();
  } catch (error) {
    console.log("[error handleClientSignOut]", error);
  } finally {
    yield put(toogleLoading(false));
  }
}

export function* clientSagas() {
  yield takeEvery(actionKeys.GET_CLIENT_DETAIL_REQUEST, handleClientDetail);
  yield takeEvery(actionKeys.CLIENT_SIGN_IN, handleClientSignIn);
  yield takeEvery(actionKeys.CLIENT_SIGN_OUT, handleClientSignOut);
}
