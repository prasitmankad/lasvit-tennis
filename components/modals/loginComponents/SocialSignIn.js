import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { clientSignInAction } from "../../../modules/actions/clientAction";
import { FederationTypes } from "../../../modules/actions/actionTypes";

export function SocialSignIn(props) {
  const { onClose } = props;
  const dispatch = useDispatch();

  return (
    <div className="mt-1 w-full flex justify-center flex-wrap content-between">
      <div className="flex-1 mx-2">
        <button
          onClick={() => {
            dispatch(clientSignInAction(FederationTypes.FACEBOOK));
            onClose();
          }}
          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span className="sr-only">Sign in with Facebook</span>
          <FaFacebook size="24" className="text-blue-600" />
        </button>
      </div>

      <div className="flex-1 mx-2">
        <button
          onClick={() => {
            dispatch(clientSignInAction(FederationTypes.GOOGLE));
            onClose();
          }}
          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span className="sr-only">Sign in with Google</span>
          <FaGoogle size="24" className="text-red-600" />
        </button>
      </div>
    </div>
  );
}

SocialSignIn.propTypes = {
  onClose: PropTypes.func.isRequired,
};
