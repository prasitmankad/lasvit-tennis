import { useTranslation } from "react-i18next";

export function SignUp({ onChange, setUiState, signUp }) {
  const { t } = useTranslation();

  return (
    <div className="mt-6 mx-4">
      <div>
        <p className="text-3xl font-extrabold text-gray-900">
          {t("loginModal.signUp")}
        </p>
      </div>

      <div className="mt-8">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              {t("loginModal.form.username")}
            </label>
            <div className="mt-1">
              <input
                id="username"
                name="username"
                required
                onChange={onChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

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
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
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
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange hover:bg-white hover:border-orange hover:text-orange"
              onClick={signUp}
            >
              {t("loginModal.form.signUp")}
            </button>
          </div>

          <p className="mt-12 mx-1 text-sm font-light">
            {t("loginModal.have")}
            <span
              onClick={() => setUiState("signIn")}
              role="button"
              className="cursor-pointer text-orange"
            >
              {" "}
              {t("loginModal.form.signIn")}.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
