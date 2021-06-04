import { useDispatch } from "react-redux";
import { clientSignOutAction } from "../../modules/actions/clientAction";
import { useTranslation } from "react-i18next";
import { useClient } from "../../hooks/useClient";

export function PageAccountDetail() {
  const { client } = useClient();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    client && (
      <div className="relative max-w-7xl mx-auto flex-1 flex flex-col w-full bg-white focus:outline-none">
        {/* FOR DEVELOPING */}
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <button
            className="text-white w-42 mt-10 bg-gray-400 p-3 rounded"
            onClick={() => dispatch(clientSignOutAction())}
          >
            Sign Out
          </button>
        </div>

        <div className="flex-1 max-h-screen xl:overflow-y-auto">
          <div className="py-10 px-4 sm:px-6 lg:py-12 lg:px-8 flex-1">
            <h1 className="text-3xl font-extrabold text-blue-gray-900">
              {t("account.client.title")}
            </h1>
            <p className="mt-1 text-sm text-blue-gray-500">
              {t("account.client.title", { provider: client.provider })}
            </p>

            <form className="mt-6 space-y-8 divide-y divide-y-blue-gray-200">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                <div className="sm:col-span-6">
                  <h2 className="text-m font-medium text-blue-gray-900">
                    {t("account.client.profile")}
                  </h2>
                </div>

                <div className="sm:col-span-6">
                  <div className="block text-sm font-medium text-blue-gray-500">
                    {t("account.client.userName")}
                  </div>
                  <div className="block text-m text-blue-gray-500">
                    {client.name}
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    for="photo"
                    className="block text-sm font-medium text-blue-gray-900"
                  >
                    {t("account.client.photo")}
                  </label>
                  <div className="mt-1 flex items-center">
                    <img
                      className="inline-block h-25 w-25 rounded-full"
                      src={client.img}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                <div className="sm:col-span-6">
                  <h2 className="text-m font-medium text-blue-gray-900">
                    {t("account.client.info")}
                  </h2>
                </div>

                <div className="sm:col-span-6">
                  <div className="block text-sm font-medium text-blue-gray-500">
                    {t("account.client.email")}
                  </div>
                  <div className="block text-m text-blue-gray-500">
                    {client.email}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
}
