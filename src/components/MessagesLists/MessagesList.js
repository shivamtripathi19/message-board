import {
  LinkButton,
  MessageBoxWrapper,
  MessageInfo,
  MessageSourceBox,
  MessageTextBox,
  MessageTimeBox,
  MessagesWrapper,
} from "./styles";

import { messagesListConstants } from "../../constants/en";
const { DELETE, PLACEHOLDER_SOURCE } = messagesListConstants;

export default function MessagesList({ messageData, deleteMessage }) {
  const handleDeleteMessage = (messageId) => {
    deleteMessage(messageId);
  };

  const icon = (
    <i className="far fa-comment-dots" style={{ fontSize: "18px" }}></i>
  );

  const getMessageTimeline = (timestamp) => {
    const timerString = new Date(timestamp)?.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    return `- ${timerString}`;
  };

  const getSourceName = (source) => {
    return `~${source || PLACEHOLDER_SOURCE}`;
  };

  return messageData?.map((ele, key) => {
    return (
      <MessagesWrapper key={key}>
        <MessageInfo>
          <MessageBoxWrapper>{icon}</MessageBoxWrapper>
          <MessageSourceBox>{getSourceName(ele?.source)}</MessageSourceBox>
          <MessageTimeBox>{getMessageTimeline(ele?.timestamp)}</MessageTimeBox>
          <LinkButton onClick={() => handleDeleteMessage(ele.id)}>
            {DELETE}
          </LinkButton>
        </MessageInfo>
        <MessageTextBox>{ele?.text}</MessageTextBox>
      </MessagesWrapper>
    );
  });
}
