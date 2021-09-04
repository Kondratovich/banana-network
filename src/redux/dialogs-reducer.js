const SEND_MESSAGE = "SEND-MESSAGE";

export const sendMessage = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessageText = action.newMessageBody;
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 4,
            message: newMessageText,
          },
        ],
      };
    default:
      return state;
  }
};

export default dialogsReducer;
