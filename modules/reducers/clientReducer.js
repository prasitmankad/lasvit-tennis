import { actionKeys } from "../actions/actionTypes";

const initialState = {
  client: null,
  modal: false,
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionKeys.GET_CLIENT_DETAIL_SUCCESS:
      return { ...state, client: action.payload };

    case actionKeys.LOGIN_MODAL:
      return { ...state, modal: action.payload };

    default:
      return state;
  }
};
