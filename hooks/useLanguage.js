import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguageAction } from "../modules/actions/clientAction";
import { setLanguage } from "../translations/utils";
import { baseLanguage } from "../translations/config";

export function useLanguage() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.applicationState.language);

  const setLangMutate = React.useCallback(
    (lang) => {
      dispatch(setLanguageAction(lang));
      setLanguage(lang);
    },
    [dispatch, setLanguage]
  );

  const fallbackLanguage = React.useCallback((T) => {
    //    console.log("language ->", T)
    // return T ? "en_us" : "";

    if (typeof T === "object") {
      // return T ? "en_us" : "";
      return T ? Object.values(lang in T ? T[lang] : T[baseLanguage]) : "";
    }
    return T;
  });

  return {
    lang,
    setLangMutate,
    l: fallbackLanguage,
  };
}
