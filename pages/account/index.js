import React from "react";
import { PageWrapper } from "../PageWrapper";
import { MenuBar } from "./components/MenuBar";
import { PageAccountDetail } from "./components/PageAccountDetail";
import { PageBilling } from "./components/PageBilling";

export const PageType = {
  ACCOUNT: "account",
  BILLING: "billing",
};

const component = {
  [PageType.ACCOUNT]: PageAccountDetail,
  [PageType.BILLING]: PageBilling,
};

function AccountPage() {
  const [pageView, setPageView] = React.useState(PageType.ACCOUNT);

  const Component = component[pageView];

  return (
    <PageWrapper page={null}>
      <div className="relative flex-1 flex flex-col w-full bg-white focus:outline-none">
        <main className="flex-1 flex overflow-hidden">
          <div className="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
            <div className="flex-1 flex xl:overflow-hidden">
              <MenuBar changeView={setPageView} activeView={pageView} />
              <Component />
            </div>
          </div>
        </main>
      </div>
    </PageWrapper>
  );
}

export default AccountPage;
