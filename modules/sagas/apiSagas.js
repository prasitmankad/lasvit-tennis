import { put, takeEvery } from "redux-saga/effects";
import { actionKeys } from "../actions/actionTypes";
import { API, graphqlOperation } from "aws-amplify";
import { listClientBillings } from "../../src/graphql/queries";
import * as mutations from "../../src/graphql/mutations";
import { fetchBillingList, fetchBillingListAction } from "../actions/apiAction";

// AWS API
function* handleFetchBillingList() {
  try {
    let billingList = [];
    yield API.graphql(graphqlOperation(listClientBillings)).then(({ data }) => {
      billingList = data.listClientBillings.items;
    });
    yield put(fetchBillingList(billingList));
  } catch (error) {
    console.log("[error handleFetchBillingList]", error);
  }
}

// [VB]TODO : merge Pay Gate data
function* handleCreateBilling() {
  const GQLBillingData = {
    courseId: "course1",
    billingId: "billing1",
  };

  try {
    yield API.graphql({
      query: mutations.createClientBilling,
      variables: { input: GQLBillingData },
    }).then((res) => {
      console.log("[res]", res);
    });
    yield put(fetchBillingListAction());
  } catch (error) {
    console.log("[error handleCreateBilling]", error);
  }
}

export function* apiSagas() {
  yield takeEvery(
    actionKeys.FETCH_BILLING_LIST_REQUEST,
    handleFetchBillingList
  );
  yield takeEvery(actionKeys.CREATE_BILLING_REQUEST, handleCreateBilling);
}
