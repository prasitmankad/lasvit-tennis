import React from "react";
import { format } from "date-fns";
// import { CurrencySymbol } from "../../courses/types";
import { useTranslation } from "react-i18next";

export function BillingTable(props) {
  const { t } = useTranslation();
  const { nameTable, billing = [] } = props;
  const [detail, viewDetail] = React.useState(null);

  return (
    <section aria-labelledby="billing_history_heading py-12">
      <div className="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2
            id="billing_history_heading"
            className="text-lg leading-6 font-medium text-gray-900"
          >
            {nameTable}
          </h2>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden border-t border-gray-200">
                <div className="min-w-full mb-24">
                  <div className="grid grid-cols-4 gap-4 bg-gray-50 border-b-2 border-gray-200">
                    <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t("account.billing.table.date")}
                    </div>
                    <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t("account.billing.table.course")}
                    </div>
                    <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t("account.billing.table.price")}
                    </div>
                    <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <span className="sr-only">
                        {t("account.billing.table.details")}
                      </span>
                    </div>
                  </div>
                  {billing &&
                    billing.map((bill) => {
                      return (
                        <>
                          <div
                            key={bill.id}
                            className="grid grid-cols-4 gap-4 bg-white border-b-2 border-gray-200"
                          >
                            <div className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {format(new Date(bill.createdAt), "MM/dd/yyyy")}
                            </div>
                            <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {bill.name}
                            </div>
                            <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {/* {CurrencySymbol[`${bill.currency}`]} */}
                              {bill.amount}
                              {`/${bill.period}`}
                            </div>
                            <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div
                                className="text-orange-600 hover:text-orange-900 cursor-pointer"
                                onClick={() =>
                                  viewDetail((prev) =>
                                    prev === bill.id ? null : bill.id
                                  )
                                }
                              >
                                {t("account.billing.table.details")}
                              </div>
                            </div>
                          </div>
                          {detail === bill.id && (
                            <div className="transition-transform ease-out grid grid-cols-4 grap-4 bg-blue-50 bg-opacity-50">
                              <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <p>[TODO] SOME PAY DETAILS...</p>
                              </div>
                              <div className="col-span-3 px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <p>ID : {bill.id}</p>
                                <p>NAME: {bill.name}</p>
                                <p>TYPE: {bill.priceType}</p>
                                <p>
                                  {/* PRICE: {CurrencySymbol[`${bill.currency}`]} */}
                                  {bill.amount}
                                </p>
                                <p>PERIOD: {bill.period}</p>
                                <p>PAYLOAD ID: {bill.payload.id}</p>
                                <p>PAYLOAD CREATED: {bill.payload.created}</p>
                              </div>
                            </div>
                          )}
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
