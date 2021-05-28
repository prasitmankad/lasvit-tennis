import { actionKeys } from "../actions/actionTypes";

const initialState = {
  client: null,
  loginFail: false,
  modal: false,
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionKeys.GET_CLIENT_DETAIL_SUCCESS:
      return { ...state, client: action.payload };

    case actionKeys.LOGIN_MODAL:
      return { ...state, modal: action.payload };

    case actionKeys.CLIENT_CUSTOM_LOGIN_FAIL:
      return { ...state, loginFail: action.payload };

    default:
      return state;
  }
};
