import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message
      message={m.message}
      newMessageText={props.newMessageText}
    />
  ));

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            onChange={onMessageChange}
            value={props.newMessageText}
            placeholder="type, bitch"
          ></textarea>
          <button onClick={onSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
