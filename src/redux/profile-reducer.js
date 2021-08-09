const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const addPostActionCreator = () => ({ type: ADD_POST });

let initialState = {
  posts: [
    { id: 1, message: "Mix", likesCount: 11 },
    { id: 2, message: "I'm fine", likesCount: 12 },
    { id: 3, message: "Big day", likesCount: 3 },
  ],
  newPostText: "Kondratovich",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPostText = state.newPostText;
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          {
            id: 5,
            message: newPostText,
            likesCount: 0,
          },
        ],
      };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    default:
      return state;
  }
};

export default profileReducer;
