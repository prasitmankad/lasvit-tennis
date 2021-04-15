import { actionKeys } from "../actions/actionTypes";

const initialState = {
  loading: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionKeys.SET_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
