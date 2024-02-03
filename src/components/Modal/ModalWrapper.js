import React from "react";
import {
  ButtonCancel,
  ButtonSuccess,
  FooterContent,
  ModalContent,
} from "./styles";
import { modalConstants } from "../../constants/en";
const { TEXT, YES, NO } = modalConstants;
export default function ModalWrapper({ handlerDeleteMessages, toggleModal }) {
  return (
    <ModalContent>
      <h2>{TEXT}</h2>
      <FooterContent>
        <ButtonSuccess onClick={handlerDeleteMessages}>{YES}</ButtonSuccess>
        <ButtonCancel onClick={toggleModal}>{NO}</ButtonCancel>
      </FooterContent>
    </ModalContent>
  );
}
