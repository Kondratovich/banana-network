const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

let initialState = {
  dialogs: [
    { id: 1, name: "Artem" },
    { id: 2, name: "Maxim" },
    { id: 3, name: "Vlad" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Yo" },
    { id: 3, message: "What are you doing?" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessageText = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        messages: [
          ...state.messages,
          {
            id: 4,
            message: newMessageText,
          },
        ],
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };
    default:
      return state;
  }
};

export default dialogsReducer;
