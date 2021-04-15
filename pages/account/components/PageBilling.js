import React from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { fetchBillingListAction } from "../../../modules/actions/apiAction";
import { BillingTable } from "./BillingTable";

export function PageBilling() {
  const dispatch = useDispatch();
  const clientBilling = useSelector(
    (state) => state.billingState.billing,
    shallowEqual
  );

  React.useEffect(() => {
    !clientBilling && dispatch(fetchBillingListAction());
  }, [clientBilling]);

  return (
    <div class="flex-1 max-h-screen xl:overflow-y-auto">
      <div class="py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
        <h1 class="text-3xl font-extrabold text-blue-gray-900">Billing</h1>
      </div>
      <BillingTable billing={clientBilling} nameTable="Billing history" />
    </div>
  );
}
