import React from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { fetchBillingListAction } from "../modules/actions/apiAction";

export function useClient(courseId = null) {
  const dispatch = useDispatch();
  const _clientBillingList = useSelector(
    (state) => state.billingState.billing,
    shallowEqual
  );

  const _client = useSelector(
    (state) => state.clientState.client,
    shallowEqual
  );

  let _courseBilling;

  if (courseId !== null && _clientBillingList) {
    _courseBilling =
      _clientBillingList.find((bill) => bill.courseId === courseId) || null;
  }

  React.useEffect(() => {
    !_clientBillingList && dispatch(fetchBillingListAction());
  }, [_clientBillingList]);

  return {
    client: _client,
    clientBillingList: _clientBillingList,
    courseBilling: _courseBilling,
  };
}
