import { actionKeys } from "../actions/actionTypes";

import { getLanguage } from "../../translations/utils";

const initialState = {
  loading: false,
  language: getLanguage(),
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionKeys.SET_LOADING:
      return { ...state, loading: action.payload };

    case actionKeys.SET_LANGUAGE:
      return { ...state, language: action.payload };

    default:
      return state;
  }
};
