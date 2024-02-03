import React from "react";
import ReactDOM from "react-dom";
import { ModalContainer } from "./styles";
const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <ModalContainer>{children}</ModalContainer>,
    document.getElementById("modal-root")
  );
};
export default Modal;
