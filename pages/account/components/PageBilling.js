import React from "react";
import { BillingTable } from "./BillingTable";
import { useTranslation } from "react-i18next";
import { useClient } from "../../../hooks/useClient";

export function PageBilling() {
  const { t } = useTranslation();
  const { clientBillingList } = useClient();

  return (
    <BillingTable billing={clientBillingList} nameTable="Billing history" />
  );
}
