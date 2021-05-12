import React from "react";
import { useSelector } from "react-redux";
import { Hub } from "aws-amplify";
import { useClient } from "../../hooks/useClient";
import { useRouter } from "next/router";
import { Loader } from "../Loader";
import { getRedirectLocation } from "../../utils/localStorageUtils";
import { Auth } from "aws-amplify";

export function AccountLogger({ children }) {
  const loading = useSelector((state) => state.applicationState.loading);
  const { clientBillingList, client } = useClient();
  const [logger, setLogger] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    isLog().then(() => {
      setLogger(true);
    });

    async function isLog() {
      await Hub.listen("auth", ({ payload: { event } }) => {
        switch (event) {
          case "signIn":
            const redirect = getRedirectLocation();
            setLogger(!redirect);
            router.push(redirect, undefined, { shallow: true });
            return false;
        }
      });
    }
  }, []);

  React.useEffect(() => {
    if (client === null && logger === true) {
      clientController();
    }

    async function clientController() {
      await Auth.currentAuthenticatedUser().catch(() => {
        setLogger(false);
        router.push("/", undefined, { shallow: true });
      });
    }
  }, [logger, client]);

  return (
    <>
      {client && logger
        ? children({ logger, client, clientBillingList })
        : !loading && <Loader />}
    </>
  );
}
