import React, { useEffect } from "react";
import { useReactiveVar } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  notifyErrorState,
  notifySuccessState,
} from "../../apollo/reactiveState";

const UiToasterNotification = () => {
  const _errorMessage = useReactiveVar(notifyErrorState);
  const _successMessage = useReactiveVar(notifySuccessState);
  useEffect(() => {
    if (_errorMessage) {
      toast.error(_errorMessage.errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (_successMessage) {
      toast.success(_successMessage.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [_errorMessage, _successMessage]);

  return <ToastContainer />;
};

export default UiToasterNotification;
