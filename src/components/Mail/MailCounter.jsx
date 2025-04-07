import style from "./Mail.module.css";
import MessageList from "./MessageList";
const MailCounter = ({ username, messages }) => {
  return (
    <div>
      <p className={style.hello}>Hello {username}</p>
      {messages.length > 0 ? (
        <div>
          <p className={style.unread}>
            You have {messages.length} unread messages
          </p>
          <MessageList messages={messages} />
        </div>
      ) : (
        <p className={style.noMessage}>No unread messages</p>
      )}
    </div>
  );
};

export default MailCounter;
