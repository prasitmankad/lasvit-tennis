import { actionKeys } from "../actions/actionTypes";

const initialState = {
  client: null,
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionKeys.GET_CLIENT_DETAIL_SUCCESS:
      return { ...state, client: action.payload };

    default:
      return state;
  }
};
