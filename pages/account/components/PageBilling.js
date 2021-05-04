import React from "react";
import { BillingTable } from "./BillingTable";
import { useTranslation } from "react-i18next";
import { useBillingCourse } from "../../../hooks/useBillingCourse";

export function PageBilling() {
  const { t } = useTranslation();
  const { clientBillingList } = useBillingCourse();

  return (
    <div className="flex-1 max-h-screen xl:overflow-y-auto">
      <div className="py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
        <h1 className="text-3xl font-extrabold text-blue-gray-900">
          {t("account.billing.title")}
        </h1>
      </div>
      <BillingTable billing={clientBillingList} nameTable="Billing history" />
    </div>
  );
}
