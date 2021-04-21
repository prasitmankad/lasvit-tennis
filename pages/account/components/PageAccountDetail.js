import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { clientSignOutAction } from "../../../modules/actions/clientAction";

export function PageAccountDetail() {
  const client = useSelector((state) => state.clientState.client, shallowEqual);
  const dispatch = useDispatch();

  return (
    client && (
      <div className="flex-1 max-h-screen xl:overflow-y-auto">
        <div className="py-10 px-4 sm:px-6 lg:py-12 lg:px-8 flex-1">
          <h1 className="text-3xl font-extrabold text-blue-gray-900">
            Account
          </h1>
          <p className="mt-1 text-sm text-blue-gray-500">
            Your profile is created from {client.provider} account.
          </p>

          <form className="mt-6 space-y-8 divide-y divide-y-blue-gray-200">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
              <div className="sm:col-span-6">
                <h2 className="text-xl font-medium text-blue-gray-900">
                  Profile
                </h2>
              </div>

              <div className="sm:col-span-6">
                <div className="block text-sm font-medium text-blue-gray-500">
                  User name
                </div>
                <div className="block text-xl text-blue-gray-500">
                  {client.name}
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  for="photo"
                  className="block text-sm font-medium text-blue-gray-900"
                >
                  Photo
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
                <h2 className="text-xl font-medium text-blue-gray-900">
                  Personal Information
                </h2>
              </div>

              <div className="sm:col-span-6">
                <div className="block text-sm font-medium text-blue-gray-500">
                  Email address
                </div>
                <div className="block text-xl text-blue-gray-500">
                  {client.email}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  );
}
