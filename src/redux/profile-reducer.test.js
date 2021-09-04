import profileReducer, { addPost, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Mix", likesCount: 11 },
    { id: 2, message: "I'm fine", likesCount: 12 },
    { id: 3, message: "Big day", likesCount: 3 },
  ],
};

it("length of posts should be incremented", () => {
  let action = addPost("Kondratovich.com");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
});

it("message of new post should be correct", () => {
  let action = addPost("Kondratovich.com");

  let newState = profileReducer(state, action);

  expect(newState.posts[3].message).toBe("Kondratovich.com");
});

it("after deleting length of messages should be decrement", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});
