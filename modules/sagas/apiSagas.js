import { put, takeEvery, call, all } from "redux-saga/effects";
import { actionKeys } from "../actions/actionTypes";
import { API, graphqlOperation } from "aws-amplify";
import { listClientBillings } from "../../src/graphql/queries";
import * as mutations from "../graphql/mutations";
import {
  fetchBillingList,
  fetchBillingListAction,
  showPayloadModalAction,
} from "../actions/apiAction";
import { postToken } from "../api/pay";

// AWS API
function* handleFetchBillingList() {
  try {
    let billingList = [];
    yield API.graphql(graphqlOperation(listClientBillings)).then(({ data }) => {
      billingList = data.listClientBillings.items;
    });
    billingList.sort((a, b) =>
      a.createdAt > b.createdAt ? 1 : b.createdAt > a.createdAt ? -1 : 0
    );

    yield put(fetchBillingList(billingList));
  } catch (error) {
    console.log("[error handleFetchBillingList]", error);
  }
}

function* handleCreateBilling(action) {
  try {
    const { data, token } = action.payload;
    const response = call(postToken, token, data.amount * 100);
    const payObject = response.payload.args[0];

    yield API.graphql({
      query: mutations.createClientBilling,
      variables: {
        input: {
          ...data,
          ...{
            payload: {
              id: payObject.id,
              created: payObject.created,
            },
          },
        },
      },
    });

    yield all([
      put(fetchBillingListAction()),
      put(showPayloadModalAction(true)),
    ]);
  } catch (error) {
    console.log("[error handleCreateBilling]", error);
  } finally {
    yield put(showPayloadModalAction(false));
  }
}

export function* apiSagas() {
  yield takeEvery(
    actionKeys.FETCH_BILLING_LIST_REQUEST,
    handleFetchBillingList
  );
  yield takeEvery(actionKeys.CREATE_BILLING_REQUEST, handleCreateBilling);
}
