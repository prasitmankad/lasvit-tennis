import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguageAction } from "../modules/actions/clientAction";
import { setLanguage } from "../translations/utils";
import { baseLanguage } from "../translations/config";

export function useLanguage() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.applicationState.language);

  async function setLang(lang) {
    await dispatch(setLanguageAction(lang));
  }

  const setLangMutate = React.useCallback(
    (lang) => {
      dispatch(setLanguageAction(lang));
      setLanguage(lang);
    },
    [dispatch, setLanguage]
  );

  const fallbackLanguage = React.useCallback((T) => {
    return T ? Object.values(lang in T ? T[lang] : T[baseLanguage]) : "";
  });

  return {
    lang,
    setLangMutate,
    l: fallbackLanguage,
  };
}
