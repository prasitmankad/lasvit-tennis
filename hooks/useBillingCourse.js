import React from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { fetchBillingListAction } from "../modules/actions/apiAction";

export function useBillingCourse(courseId) {
  const dispatch = useDispatch();
  const _clientBillingList = useSelector(
    (state) => state.billingState.billing,
    shallowEqual
  );

  let _courseBilling;

  if (courseId && _clientBillingList) {
    _courseBilling =
      _clientBillingList.find((bill) => bill.courseId === courseId) || null;
  }

  React.useEffect(() => {
    !_clientBillingList && dispatch(fetchBillingListAction());
  }, [_clientBillingList]);

  return {
    clientBillingList: _clientBillingList,
    courseBilling: _courseBilling,
  };
}
