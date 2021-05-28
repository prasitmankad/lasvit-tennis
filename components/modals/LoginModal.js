import React from "react";
import PropTypes from "prop-types";
import { Modal } from "./Modal";
import { SignIn } from "./loginComponents/SignIn";
import { SignUp } from "./loginComponents/SignUp";
import { ConfirmSignUp } from "./loginComponents/ConfirmSignUp";
import { ForgotPassword } from "./loginComponents/ForgotPassword";
import { ForgotPasswordSubmit } from "./loginComponents/ForgotPasswordSubmit";
import { useRouter } from "next/router";
import {
  setRedirectLocation,
  removeRedirectLocation,
} from "../../utils/localStorageUtils";
import { Auth } from "aws-amplify";
import { useDispatch } from "react-redux";
import {
  clientCustomSignIn,
  clientCustomSignUp,
  clientCustomConfirmSignUp,
  clientCustomForgotPassword,
  clientCustomForgotPasswordSubmit,
  clientCustomLoginFail,
} from "../../modules/actions/clientAction";

const initialState = {
  email: "",
  password: "",
  authCode: "",
  username: "",
  picture:
    "https://cdn.sanity.io/images/uhhvkz4x/production/359912cf717e3e1a8b59724b8a8ebf3e762be47e-1080x1080.png?w=120&q=80&fit=crop&auto=format", // placeholder
};

export function LoginModal(props) {
  const { onClose } = props;
  const router = useRouter();
  const dispatch = useDispatch();
  const [uiState, setUiState] = React.useState("signIn");
  const [formState, setFormState] = React.useState(initialState);

  const { email, password, authCode, username, picture } = formState;

  React.useEffect(() => {
    return () => {
      dispatch(clientCustomLoginFail(false));
    };
  }, []);

  if (window && router.pathname === "/courses/[id]") {
    setRedirectLocation(window.location.pathname);
  } else {
    removeRedirectLocation();
  }

  function onChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <Modal>
      <div className="pb-4 px-4">
        {uiState === "signIn" && (
          <SignIn
            onClose={onClose}
            onChange={onChange}
            setUiState={setUiState}
            signIn={() => {
              dispatch(clientCustomSignIn(email, password));
            }}
          />
        )}

        {uiState === "signUp" && (
          <SignUp
            onChange={onChange}
            setUiState={setUiState}
            signUp={() => {
              dispatch(
                clientCustomSignUp({
                  username: email,
                  password,
                  attributes: {
                    email,
                    picture,
                    name: username,
                  },
                })
              );
              setUiState("confirmSignUp");
            }}
          />
        )}

        {uiState === "confirmSignUp" && (
          <ConfirmSignUp
            onChange={onChange}
            setUiState={setUiState}
            confirmSignUp={() => {
              dispatch(clientCustomConfirmSignUp(email, authCode, password));
            }}
          />
        )}

        {uiState === "forgotPassword" && (
          <ForgotPassword
            onChange={onChange}
            setUiState={setUiState}
            forgotPassword={() => {
              dispatch(clientCustomForgotPassword(email));
              setUiState("forgotPasswordSubmit");
            }}
          />
        )}

        {uiState === "forgotPasswordSubmit" && (
          <ForgotPasswordSubmit
            onChange={onChange}
            forgotPasswordSubmit={() => {
              dispatch(
                clientCustomForgotPasswordSubmit(email, authCode, password)
              );
              setUiState("signIn");
            }}
          />
        )}
      </div>
    </Modal>
  );
}

LoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
