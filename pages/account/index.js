import React from "react";
import { MenuBar } from "./components/MenuBar";
import Error from "next/error";
import { PageAccountDetail } from "./components/PageAccountDetail";
import { PageBilling } from "./components/PageBilling";
import { useRouter } from "next/router";
import RenderHeader from "../../components/render/renderHeader";
import RenderFooter from "../../components/render/renderFooter";
import { sanityClient, getClient } from "../../utils/sanity";
import query from "../../modules/groq/page";

export async function getStaticProps({ preview = false }) {
  var pageData = await sanityClient.fetch(query, { slug: "account" });

  return {
    props: { preview, pageData },
    revalidate: 1,
  };
}

export const PageType = {
  ACCOUNT: "account",
  BILLING: "billing",
};

const component = {
  [PageType.ACCOUNT]: PageAccountDetail,
  [PageType.BILLING]: PageBilling,
};

function AccountPage({ pageData }) {
  const router = useRouter();
  const [pageView, setPageView] = React.useState(PageType.ACCOUNT);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!pageData) {
    return <Error statusCode={404} />;
  }

  const Component = component[pageView];

  return (
    <>
      <RenderHeader data={pageData.globalData} />

      <div className="relative max-w-7xl mx-auto flex-1 flex flex-col w-full bg-white focus:outline-none">
        <main className="flex-1 flex overflow-hidden">
          <div className="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
            <div className="flex-1 flex xl:overflow-hidden">
              <MenuBar changeView={setPageView} activeView={pageView} />
              <Component />
            </div>
          </div>
        </main>
      </div>

      <RenderFooter data={pageData.globalData} />
    </>
  );
}

export default AccountPage;
