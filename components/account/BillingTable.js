import React from "react";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { PaymentDetail } from "./PaymentDetail";

export function BillingTable(props) {
  const { t } = useTranslation();
  const { nameTable, billing = [] } = props;
  const [detail, viewDetail] = React.useState(null);

  return (
    <>
      <main className="max-w-7xl w-full mx-auto pb-10 lg:py-12 lg:px-8">
        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
          <section aria-labelledby="billing_history_heading">
            <div className="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 sm:px-6">
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
                      <div className="min-w-full">
                        <div className="grid grid-cols-4 gap-4 bg-gray-50 border-b-2 border-gray-200">
                          <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t("account.billing.table.date")}
                          </div>
                          <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t("account.billing.table.description")}
                          </div>
                          <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t("account.billing.table.amount")}
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
                                  <div className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 truncate">
                                    {format(
                                      new Date(bill.createdAt),
                                      "MM/dd/yyyy"
                                    )}
                                  </div>
                                  <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate">
                                    {bill.name}
                                  </div>
                                  <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate">
                                    {bill.symbol}
                                    {bill.amount}
                                  </div>
                                  <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate">
                                    <div
                                      className="gray-dark cursor-pointer"
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
                                  <PaymentDetail
                                    bill={bill}
                                    client={props.client}
                                  />
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
        </div>
      </main>
    </>
  );
}

import { Fragment, useState } from "react";
import {
  Disclosure,
  Menu,
  RadioGroup,
  Switch,
  Transition,
} from "@headlessui/react";
import { QuestionMarkCircleIcon, SearchIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  MenuIcon,
  UserCircleIcon,
  ViewGridAddIcon,
  XIcon,
} from "@heroicons/react/outline";

const user = {
  name: "Lisa Marie",
  email: "lisamarie@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Jobs", href: "#" },
  { name: "Applicants", href: "#" },
  { name: "Company", href: "#" },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const subNavigation = [
  { name: "Profile", href: "#", icon: UserCircleIcon, current: false },
  { name: "Account", href: "#", icon: CogIcon, current: false },
  { name: "Password", href: "#", icon: KeyIcon, current: false },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Plan & Billing", href: "#", icon: CreditCardIcon, current: true },
  { name: "Integrations", href: "#", icon: ViewGridAddIcon, current: false },
];
const plans = [
  {
    name: "Startup",
    priceMonthly: 29,
    priceYearly: 290,
    limit: "Up to 5 active job postings",
  },
  {
    name: "Business",
    priceMonthly: 99,
    priceYearly: 990,
    limit: "Up to 25 active job postings",
  },
  {
    name: "Enterprise",
    priceMonthly: 249,
    priceYearly: 2490,
    limit: "Unlimited active job postings",
  },
];
const payments = [
  {
    id: 1,
    date: "1/1/2020",
    datetime: "2020-01-01",
    description: "Business Plan - Annual Billing",
    amount: "CA$109.00",
    href: "#",
  },
  // More payments...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function BillingTable2() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]);
  const [annualBillingEnabled, setAnnualBillingEnabled] = useState(true);
  return (
    <>
      <main className="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
            <section aria-labelledby="billing_history_heading">
              <div className="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 sm:px-6">
                  <h2
                    id="billing_history_heading"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Billing history
                  </h2>
                </div>
                <div className="mt-6 flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden border-t border-gray-200">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Date
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Description
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Amount
                              </th>
                              {/*
                                `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
                              */}
                              <th
                                scope="col"
                                className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                <span className="sr-only">View receipt</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {payments.map((payment) => (
                              <tr key={payment.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  <time dateTime={payment.datetime}>
                                    {payment.date}
                                  </time>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {payment.description}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {payment.amount}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <a
                                    href={payment.href}
                                    className="gray-dark"
                                  >
                                    View receipt
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
