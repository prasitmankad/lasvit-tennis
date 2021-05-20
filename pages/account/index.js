import React from "react";
import Error from "next/error";
import { PageAccountDetail } from "../../components/account/PageAccountDetail";
import { useRouter } from "next/router";
import RenderHeader from "../../components/render/renderHeader";
import RenderFooter from "../../components/render/renderFooter";
import { sanityClient } from "../../utils/sanity";
import { pageCollection as query } from "../../modules/groq/page";
import { BillingTable } from "../../components/account/BillingTable";
import { AccountLogger } from "../../components/account/AccountLogger";

export async function getStaticProps({ preview = false }) {
  let pageData = await sanityClient.fetch(query, { slug: "account" });

  return {
    props: { preview, pageData },
    revalidate: 1,
  };
}

function AccountPage({ pageData }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!pageData) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <RenderHeader data={pageData.globalData} />
      <AccountLogger>
        {({ client, clientBillingList }) => {
          return (
            <div className="relative max-w-7xl mx-auto flex-1 flex flex-col w-full bg-white focus:outline-none">
              <PageAccountDetail />
              <BillingTable
                billing={clientBillingList}
                client={client}
                nameTable="Billing history"
              />
            </div>
          );
        }}
      </AccountLogger>
      <RenderFooter data={pageData.globalData} />
    </>
  );
}

export default AccountPage;
