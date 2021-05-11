import { useTranslation } from "react-i18next";
import { format } from "date-fns";

export function PaymentDetail({ bill, client }) {
  const prefix = "account.detail";
  const { t } = useTranslation();

  return (
    <section aria-labelledby="payment_details_heading">
      <form action="#" method="POST">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white py-6 px-4 sm:p-6">
            <div>
              <h2
                id="payment_details_heading"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                {t(`${prefix}.title`)}
              </h2>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-6">
              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="course_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t(`${prefix}.course`)}
                </label>
                <input
                  type="text"
                  name="course_name"
                  id="course_name"
                  disabled
                  value={bill.name}
                  autoComplete="cc-given-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                />
              </div>

              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="email_address"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t(`${prefix}.email`)}
                </label>
                <input
                  type="text"
                  name="email_address"
                  id="email_address"
                  autoComplete="email"
                  disabled
                  value={client.email}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                />
              </div>

              <div className="col-span-4 sm:col-span-1">
                <label
                  htmlFor="expiration_date"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t(`${prefix}.date`)}
                </label>
                <input
                  type="text"
                  name="expiration_date"
                  id="expiration_date"
                  autoComplete="cc-exp"
                  disabled
                  value={format(new Date(bill.createdAt), "MM/dd/yyyy")}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  placeholder="MM / YY"
                />
              </div>

              <div className="col-span-4 sm:col-span-1">
                <label
                  htmlFor="security_code"
                  className="flex items-center text-sm font-medium text-gray-700"
                >
                  <span>{t(`${prefix}.amount`)}</span>
                </label>
                <input
                  type="text"
                  name="security_code"
                  id="security_code"
                  autoComplete="cc-csc"
                  disabled
                  value={`${bill.symbol}${bill.amount}`}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                />
              </div>

              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="postal_code"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t(`${prefix}.period`)}
                </label>
                <input
                  type="text"
                  name="postal_code"
                  id="postal_code"
                  autoComplete="postal-code"
                  disabled
                  value={bill.period}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
