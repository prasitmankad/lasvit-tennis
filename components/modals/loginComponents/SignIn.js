import { SocialSignIn } from "./SocialSignIn";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { clientCustomLoginFail } from "../../../modules/actions/clientAction";

export function SignIn({ onClose, onChange, setUiState, signIn }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const invalid = useSelector((state) => state.clientState.loginFail);

  return (
    <div className="mt-6 mx-2">
      <div>
        <p className="mx-2 text-3xl font-extrabold text-gray-900">
          {t("loginModal.signIn")}
        </p>
      </div>

      <div className="mt-8">
        <div>
          <div>
            <p className="mx-2 text-sm font-medium text-gray-700">
              {t("loginModal.social")}
            </p>

            <SocialSignIn onClose={onClose} />
          </div>

          <div className="mt-6 relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                {t("loginModal.continue")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {invalid && (
        <p className="m-2 text-sm text-red-600">{t("loginModal.validate")}</p>
      )}

      <div className="space-y-6 mx-2">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            {t("loginModal.form.email")}
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              onChange={onChange}
              onFocus={() => dispatch(clientCustomLoginFail(false))}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="space-y-1 ">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            {t("loginModal.form.password")}
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              onChange={onChange}
              onFocus={() => dispatch(clientCustomLoginFail(false))}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span
              onClick={() => setUiState("forgotPassword")}
              className="cursor-pointer text-sm gray-dark"
            >
              {t("loginModal.pswForgot")}
            </span>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="text-sm w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-dark hover:bg-white hover:border-green-dark hover:gray-dark"
            onClick={signIn}
          >
            {t("loginModal.form.signIn")}
          </button>
        </div>

        <p className="mt-12 mx-1 text-sm font-light">
          {t("loginModal.dont")}
          <span
            onClick={() => setUiState("signUp")}
            role="button"
            className="cursor-pointer gray-dark"
          >
            {" "}
            {t("loginModal.form.signUp")}.
          </span>
        </p>
      </div>
    </div>
  );
}
