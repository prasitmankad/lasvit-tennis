import React from "react";
import PropTypes from "prop-types";

export function Modal(props) {
  return (
    <div className="fixed z-10 bg-gray-500 bg-opacity-75 h-screen w-screen">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0">
          <div className="flex flex-col w-full p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
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
