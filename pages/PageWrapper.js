import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { urlFor } from "../utils/sanity";
import Link from "next/link";
import { LoginModal } from "../components/modals/LoginModal";
import { LanguageButton } from "../components/LanguageButton";
import { useDispatch } from "react-redux";
import { getClientDetailAction } from "../modules/actions/clientAction";
import { Loader } from "../components/Loader";
import "../configureAmplify";

function PageWrapperPure(props) {
  const { t } = useTranslation();
  const { page = null, children, loading, client } = props;
  const dispatch = useDispatch();
  const [loginModal, showLoginModal] = React.useState(false);

  React.useEffect(() => {
    !client && dispatch(getClientDetailAction());
  }, [client]);

  return (
    <div className="h-screen bg-gray">
      {loginModal && <LoginModal onClose={() => showLoginModal(false)} />}

      {loading ? (
        <Loader />
      ) : (
        <>
          <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              {page && (
                <Link href="/">
                  <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                    <img
                      src={urlFor(page.siteData.logo)
                        .auto("format")
                        .width(125)
                        .fit("crop")
                        .quality(80)}
                      alt={
                        page.siteData.logo?.alt ||
                        `Photo of ${page.siteData.title}`
                      }
                    />
                  </a>
                </Link>
              )}
              <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link href="/">
                  <a class="mr-5 hover:text-gray-900 cursor-pointer">Home</a>
                </Link>
                <Link href="/about">
                  <a class="mr-5 hover:text-gray-900 cursor-pointer">About</a>
                </Link>
                <Link href="/blog">
                  <a class="mr-5 hover:text-gray-900 cursor-pointer">Blog</a>
                </Link>
                {client && client.name ? (
                  <Link href="/account">
                    <a class="mr-5 hover:text-gray-900 cursor-pointer">
                      {client.name}
                    </a>
                  </Link>
                ) : (
                  <div onClick={() => showLoginModal(true)}>Sign in</div>
                )}

                <LanguageButton />
                {t("test")}
              </nav>
            </div>
          </header>

          {children}

          <footer class="text-gray-600 body-font">
            <div class="bg-gray-100 border-t border-gray-200">
              <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                {page && (
                  <Link href="/">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                      <img
                        src={urlFor(page.siteData.logo)
                          .auto("format")
                          .width(80)
                          // .height(400)
                          .fit("crop")
                          .quality(80)}
                        alt={
                          page.siteData.logo?.alt ||
                          `Photo of ${page.siteData.title}`
                        }
                      />
                    </a>
                  </Link>
                )}

                <p class="text-sm text-gray-600 sm:ml-6 sm:mt-0 mt-4">
                  © 2021 Lasvit Tennis. All rights reserved.
                </p>

                <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
                  <Link href="/privacy">
                    <a
                      // href="/privacy"
                      rel="noopener noreferrer"
                      class="text-gray-600 ml-1"
                      // target="_blank"
                    >
                      Privacy Policy
                    </a>
                  </Link>{" "}
                  //
                  <Link href="/terms">
                    <a
                      // href="https://lasvittennis.com/terms"
                      rel="noopener noreferrer"
                      class="text-gray-600 ml-1"
                      // target="_blank"
                    >
                      Website Terms
                    </a>
                  </Link>
                </span>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { loading } = state.applicationState;
  const { client } = state.clientState;

  return {
    loading,
    client,
  };
};

export const PageWrapper = React.memo(
  connect(mapStateToProps)(PageWrapperPure)
);
