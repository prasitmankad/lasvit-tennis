import { actionKeys } from "../actions/actionTypes";

const initialState = {
  billing: null,
};

export const billingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionKeys.FETCH_BILLING_LIST_SUCCESS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
