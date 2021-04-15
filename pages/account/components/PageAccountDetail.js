import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { clientSignOutAction } from "../../../modules/actions/clientAction";

export function PageAccountDetail() {
  const client = useSelector((state) => state.clientState.client, shallowEqual);
  const dispatch = useDispatch();

  return (
    client && (
      <div class="flex-1 max-h-screen xl:overflow-y-auto">
        <div class="py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
          <h1 class="text-3xl font-extrabold text-blue-gray-900">Account</h1>
          <p class="mt-1 text-sm text-blue-gray-500">
            Your profile is created from {client.provider} account.
          </p>

          <form class="mt-6 space-y-8 divide-y divide-y-blue-gray-200">
            <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
              <div class="sm:col-span-6">
                <h2 class="text-xl font-medium text-blue-gray-900">Profile</h2>
              </div>

              <div class="sm:col-span-6">
                <div class="block text-sm font-medium text-blue-gray-500">
                  User name
                </div>
                <div class="block text-xl text-blue-gray-500">
                  {client.name}
                </div>
              </div>

              <div class="sm:col-span-6">
                <label
                  for="photo"
                  class="block text-sm font-medium text-blue-gray-900"
                >
                  Photo
                </label>
                <div class="mt-1 flex items-center">
                  <img
                    class="inline-block h-25 w-25 rounded-full"
                    src={client.img}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="pt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
              <div class="sm:col-span-6">
                <h2 class="text-xl font-medium text-blue-gray-900">
                  Personal Information
                </h2>
              </div>

              <div class="sm:col-span-6">
                <div class="block text-sm font-medium text-blue-gray-500">
                  Email address
                </div>
                <div class="block text-xl text-blue-gray-500">
                  {client.email}
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <button
            className="text-white w-full mt-10 bg-gray-600 p-3 rounded"
            onClick={() => dispatch(clientSignOutAction())}
          >
            DEV : Sign Out
          </button>
        </div>
      </div>
    )
  );
}
