import { useTranslation } from "react-i18next";

export function ConfirmSignUp({ onChange, setUiState, confirmSignUp }) {
  const { t } = useTranslation();

  return (
    <div className="mt-6 mx-4">
      <div>
        <p className="text-3xl font-extrabold text-gray-900">
          {t("loginModal.confirm")}
        </p>
      </div>

      <div className="mt-8">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="authCode"
              className="block text-sm font-medium text-gray-700"
            >
              {t("loginModal.form.authCode")}
            </label>
            <div className="mt-1">
              <input
                id="authCode"
                name="authCode"
                onChange={onChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-dark hover:bg-white hover:border-green-dark hover:gray-dark"
              onClick={confirmSignUp}
            >
              {t("loginModal.form.confirm")}
            </button>
            <button
              onClick={() => setUiState("signIn")}
              className="text-sm mt-6 gray-dark"
            >
              {t("loginModal.form.cancel")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
