import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./sagas/rootSaga";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from "redux-saga";

const initialStore = {};
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
  rootReducer,
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);
export default store;
