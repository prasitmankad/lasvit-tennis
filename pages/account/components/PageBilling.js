import React from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { fetchBillingListAction } from "../../../modules/actions/apiAction";
import { BillingTable } from "./BillingTable";
import { useTranslation } from "react-i18next";

export function PageBilling() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const clientBilling = useSelector(
    (state) => state.billingState.billing,
    shallowEqual
  );

  React.useEffect(() => {
    !clientBilling && dispatch(fetchBillingListAction());
  }, [clientBilling]);

  return (
    <div className="flex-1 max-h-screen xl:overflow-y-auto">
      <div className="py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
        <h1 className="text-3xl font-extrabold text-blue-gray-900">
          {t("account.billing.title")}
        </h1>
      </div>
      <BillingTable billing={clientBilling} nameTable="Billing history" />
    </div>
  );
}
