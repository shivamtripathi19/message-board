import styled from "@emotion/styled";

export const MessagesWrapper = styled.div`
  padding: 10px;
  margin-top: 10px;
  border-top: 1px dotted #808080;
`;

export const MessageInfo = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const MessageBoxWrapper = styled.span`
  margin-right: 10px;
`;

export const MessageSourceBox = styled(MessageBoxWrapper)`
  font-weight: 800;
  color: #00000;
`;

export const MessageTimeBox = styled(MessageBoxWrapper)`
  font-weight: 600;
  color: #808080;
`;

export const LinkButton = styled.span`
  border: none;
  background-color: white;
  color: blue;
  text-decoration-line: underline;
  font-size: 15px;
  cursor: pointer;
`;

export const MessageTextBox = styled.p`
  font-weight: 800;
  color: #808080;
`;
