import { combineReducers } from "redux";
import { clientReducer } from "./clientReducer";
import { appReducer } from "./appReducer";
import { billingReducer } from "./billingReducer";

export default combineReducers({
  applicationState: appReducer,
  clientState: clientReducer,
  billingState: billingReducer,
});
