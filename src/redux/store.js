import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Mix", likesCount: 11 },
        { id: 2, message: "I'm fine", likesCount: 12 },
        { id: 3, message: "Big day", likesCount: 3 },
      ],
      newPostText: "Kondratovich",
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber();
  },
};

export default store;
