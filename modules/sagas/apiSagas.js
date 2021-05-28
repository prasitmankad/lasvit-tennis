import { put, takeEvery, call, all, select } from "redux-saga/effects";
import { actionKeys } from "../actions/actionTypes";
import { API, graphqlOperation } from "aws-amplify";
import { listClientBillings } from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import {
  fetchBillingList,
  fetchBillingListAction,
  showPayloadModalAction,
} from "../actions/apiAction";
import { postToken } from "../api/pay";
import { postSubscribe } from "../api/subscribe";
import { toogleLoading } from "../actions/clientAction";

// AWS API
function* handleFetchBillingList() {
  try {
    yield put(toogleLoading(true));
    let billingList = [];
    yield API.graphql(graphqlOperation(listClientBillings)).then(({ data }) => {
      billingList = data.listClientBillings.items;
    });
    billingList.sort((a, b) =>
      a.createdAt > b.createdAt ? 1 : b.createdAt > a.createdAt ? -1 : 0
    );

    yield put(fetchBillingList(billingList));
  } catch (error) {
    // console.error("[error handleFetchBillingList]", error);
  } finally {
    yield put(toogleLoading(false));
  }
}

function* handleCreateBilling(action) {
  try {
    const { client } = yield select((state) => state.clientState);
    const { data, token } = action.payload;
    console.log('token:', token)
    const response = yield call(postToken, token, data);
    yield API.graphql({
      query: mutations.createClientBilling,
      variables: {
        input: {
          ...data,
          ...{
            payload: {
              id: response?.charge?.id,
              created: response?.charge?.created,
            },
          },
        },
      },
    });

    yield all([
      put(fetchBillingListAction()),
      call(postSubscribe, "payer", client.email),
      put(showPayloadModalAction(true)),
    ]);
  } catch (error) {
    // console.error("[error handleCreateBilling]", error);
  } finally {
  }
}

export function* apiSagas() {
  yield takeEvery(
    actionKeys.FETCH_BILLING_LIST_REQUEST,
    handleFetchBillingList
  );
  yield takeEvery(actionKeys.CREATE_BILLING_REQUEST, handleCreateBilling);
}
