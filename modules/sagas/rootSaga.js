import { all } from "redux-saga/effects";
import { clientSagas } from "./clientSagas";
import { apiSagas } from "./apiSagas";

export default function* rootSaga() {
  yield all([clientSagas(), apiSagas()]);
}
