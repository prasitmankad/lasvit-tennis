import { Modal } from "./Modal";
import { Auth } from "aws-amplify";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { clientSignInAction } from "../../modules/actions/clientAction";
import { FederationTypes } from "../../modules/actions/actionTypes";

export function LoginModal(props) {
  const { onClose } = props;
  const dispatch = useDispatch();

  return (
    <Modal>
      <div className="m-8">
        <div>
          <h2 className="mt-6 text-left text-3xl font-extrabold text-gray-900">
            Login to your account
          </h2>
        </div>
        <div>
          <div className="mt-8 text-left text-3xl font-extrabold text-gray-900">
            <label className="text-sm font-bold">Login with</label>
          </div>
        </div>
        <div className="flex flex-row items-center justify-evenly mb-8 w-full mt-4">
          <button
            className="w-full focus:outline-none mr-8"
            onClick={() => {
              dispatch(clientSignInAction(FederationTypes.GOOGLE));
              onClose();
            }}
          >
            <div className="flex border border-gray-300 p-2 items-center justify-center bg-red-600 hover:bg-red-700 text-white">
              <FaGoogle size="34" />
              <p className="ml-3">Google</p>
            </div>
          </button>
          <button
            className="w-full focus:outline-none bg-blue-800 hover:bg-blue-900"
            onClick={() => {
              dispatch(clientSignInAction(FederationTypes.FACEBOOK));
              onClose();
            }}
          >
            <div className="flex border border-gray-300 p-2 items-center justify-center text-white">
              <FaFacebookSquare size="34" />
              <p className="ml-3">Facebook</p>
            </div>
          </button>
        </div>
      </div>
    </Modal>
  );
}

LoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
