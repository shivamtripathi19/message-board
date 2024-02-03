import { useEffect, useState } from "react";
import {
  DeleteAllButton,
  ErrorText,
  InputWrapper,
  PostButton,
  SortByButton,
  TextBoxWrapper,
  TextHeaderBoxWrapper,
  Wrapper,
  block,
} from "./styles";
import { headerConstants } from "../../constants/en";
const {
  APP_TITLE,
  HEADER_TITLE,
  POST,
  DELETE_ALL,
  SORTBY,
  ERROR_MESSAGE,
} = headerConstants;

export default function Header({
  handlerSortMessage,
  postMessage,
  toggleModal,
  disabled,
}) {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");
  const handleInputChange = (e) => {
    setInputText(e?.target?.value);
  };

  const handlePostMessage = (_) => {
    if (inputText) {
      postMessage(inputText);
      setInputText("");
      setError("");
    } else {
      setError(ERROR_MESSAGE);
    }
  };
  const handleDeleteAllMessage = (_) => {
    toggleModal();
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        console.log("shivam");
        setError("");
      }, 2000);
    }
  }, [error]);

  return (
    <>
      <TextHeaderBoxWrapper>{APP_TITLE}</TextHeaderBoxWrapper>
      <TextBoxWrapper>{HEADER_TITLE}</TextBoxWrapper>
      <Wrapper>
        <div>
          <InputWrapper
            type="text"
            value={inputText}
            onChange={handleInputChange}
            // placeholder={INPUT_PLACEHOLDER}
          />
          {error && <ErrorText>{error}</ErrorText>}
        </div>

        <PostButton onClick={handlePostMessage}>{POST}</PostButton>
        <DeleteAllButton
          className={disabled ? block : ""}
          disabled={disabled}
          onClick={handleDeleteAllMessage}
        >
          {DELETE_ALL}
        </DeleteAllButton>
        <SortByButton
          className={disabled ? block : ""}
          disabled={disabled}
          onClick={handlerSortMessage}
        >
          {SORTBY}
        </SortByButton>
      </Wrapper>
    </>
  );
}
