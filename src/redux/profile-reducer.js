import { profileAPI } from "./../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const DELETE_POST = "DELETE_POST";

let initialState = {
  posts: [
    { id: 1, message: "Mix", likesCount: 11 },
    { id: 2, message: "I'm fine", likesCount: 12 },
    { id: 3, message: "Big day", likesCount: 3 },
  ],
  profile: null,
  isFetching: false,
  status: "",
};

export const addPost = (newPostBody) => ({
  type: ADD_POST,
  newPostBody,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await profileAPI.getProfile(userId);
    dispatch(toggleIsFetching(false));
    dispatch(setUserProfile(response.data));
  };
};

export const getStatus = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  };
};

export const updateStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostBody,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    default:
      return state;
  }
};

export default profileReducer;
