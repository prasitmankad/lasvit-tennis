import { actionKeys } from "../actions/actionTypes";

const initialState = {
  billing: null,
  modal: false,
};

export const billingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionKeys.FETCH_BILLING_LIST_SUCCESS:
      return { ...state, ...action.payload };

    case actionKeys.PAYLOAD_MODAL:
      return { ...state, modal: action.payload };

    default:
      return state;
  }
};
