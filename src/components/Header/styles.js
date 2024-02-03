import styled from "@emotion/styled";
import { css } from "@emotion/css";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.input`
  width: 200px;
  padding: 9px;
  border: 0.5px solid black;
`;
export const TextHeaderBoxWrapper = styled.h1`
  color: #00000;
  font-weight: 800;
`;

export const TextBoxWrapper = styled.h3`
  color: #808080;
  font-weight: 600;
`;

export const PostButton = styled.button`
  margin-left: 8px;
  padding: 8px;
  background-color: #ffff;
  color: black;
  border: 0.5px solid black;
  border-radius: 6px;
  cursor: pointer;
`;

export const DeleteAllButton = styled(PostButton)`
  color: red;
  font-weight: 800;
`;
export const SortByButton = styled(PostButton)`
  color: red;
  font-weight: 800;
`;

export const block = css`
  cursor: no-drop !important;
`;

export const ErrorText = styled.div`
  color: red;
  font-weight: 400;
  padding: 2px;
`;
