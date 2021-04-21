import React from "react";
import { connect } from "react-redux";
import { urlFor } from "../utils/sanity";
import Link from "next/link";
import { LoginModal } from "../components/modals/LoginModal";
import { PayloadModal } from "../components/modals/PayloadModal";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getClientDetailAction } from "../modules/actions/clientAction";
import { Loader } from "../components/Loader";
import "../configureAmplify";

function PageWrapperPure(props) {
  const { page = null, children, loading, client } = props;
  const dispatch = useDispatch();
  const billingModal = useSelector((state) => state.billingState.modal);
  const [loginModal, showLoginModal] = React.useState(false);

  React.useEffect(() => {
    !client && dispatch(getClientDetailAction());
  }, [client]);

  return (
    <div className="h-screen bg-gray">
      {loginModal && <LoginModal onClose={() => showLoginModal(false)} />}
      {billingModal && <PayloadModal />}

      {loading ? (
        <Loader />
      ) : (
        <>
          <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              {page && (
                <Link href="/">
                  <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
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
              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link href="/">
                  <a className="mr-5 hover:text-gray-900 cursor-pointer">
                    Home
                  </a>
                </Link>
                <Link href="/courses">
                  <a className="mr-5 hover:text-gray-900 cursor-pointer">
                    Courses
                  </a>
                </Link>
                <Link href="/about">
                  <a className="mr-5 hover:text-gray-900 cursor-pointer">
                    About
                  </a>
                </Link>
                <Link href="/blog">
                  <a className="mr-5 hover:text-gray-900 cursor-pointer">
                    Blog
                  </a>
                </Link>
                {client && client.name ? (
                  <Link href="/account">
                    <a className="mr-5 hover:text-gray-900 cursor-pointer">
                      {client.name}
                    </a>
                  </Link>
                ) : (
                  <div onClick={() => showLoginModal(true)}>Sign in</div>
                )}
              </nav>
            </div>
          </header>
          {children}
          <footer className="text-gray-600 body-font">
            <div className="bg-gray-100 border-t border-gray-200">
              <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                {page && (
                  <Link href="/">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
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

                <p className="text-sm text-gray-600 sm:ml-6 sm:mt-0 mt-4">
                  © 2021 Lasvit Tennis. All rights reserved.
                </p>

                <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
                  <Link href="/privacy">
                    <a
                      // href="/privacy"
                      rel="noopener noreferrer"
                      className="text-gray-600 ml-1"
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
                      className="text-gray-600 ml-1"
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
