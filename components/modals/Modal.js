import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { XIcon } from "@heroicons/react/outline";
import { showLoginModalAction } from "../../modules/actions/clientAction";

export function Modal(props) {
  const dispatch = useDispatch();

  return (
    <div className="fixed z-50 bg-gray-500 bg-opacity-75 h-screen w-screen ">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0 ">
        <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 bg-white sm:mx-0">
          <div className="flex flex-col w-full p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <div className="sm:block relative top-0 right-0 text-right">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => dispatch(showLoginModalAction(false))}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
};
