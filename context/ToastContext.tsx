/* eslint-disable no-unneeded-ternary */

import { createContext, useEffect, useState } from "react";
import Toast from "../components/common/Toast";

const ERROR = "error";
const SUCCESS = "success";

type Context = {
  showSuccessMessage: (message: string) => void;
  showErrorMessage: (errorCode?: string, customMessage?: string) => void;
};

export const ToastContext = createContext({} as Context);

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [values, setValues] = useState({
    visible: false,
    message: "",
    type: SUCCESS,
  });

  const hideMessage = () => {
    setValues({ ...values, visible: false });
  };

  const showSuccessMessage = (message: string) => {
    setValues({
      visible: true,
      type: SUCCESS,
      message,
    });
  };

  const showErrorMessage = (customMessage?: string) => {
    let message = customMessage ? customMessage : "Ha ocurrido un error";

    setValues({
      visible: true,
      type: ERROR,
      message,
    });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const providedContext = {
    showSuccessMessage,
    showErrorMessage,
  };

  useEffect(() => {
    if (values.visible) {
      setTimeout(() => {
        hideMessage();
      }, 3000);
    }
  }, [values.visible]);

  return (
    <ToastContext.Provider value={providedContext}>
      <Toast
        visible={values.visible}
        type={values.type}
        message={values.message}
      />
      {children}
    </ToastContext.Provider>
  );
}
