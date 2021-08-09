const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export const follow = (userId) => ({ type: FOLLOW, userId });

export const unfollow = (userId) => ({ type: UNFOLLOW, userId });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});

export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl: "https://piper.old-games.ru/uploads/scans/2018/02/2018-02-23-20-15-20-1910.jpg",
    //   followed: true,
    //   fullName: "Artem",
    //   status: "I'm a boss",
    //   location: { city: "Minsk", country: "Belarus" },
    // },
    // {
    //   id: 2,
    //   photoUrl: "https://piper.old-games.ru/uploads/scans/2018/02/2018-02-23-20-15-20-1910.jpg",
    //   followed: false,
    //   fullName: "Anatoliy",
    //   status: "founder",
    //   location: { city: "Gomel", country: "Belarus" },
    // },
    // {
    //   id: 3,
    //   photoUrl: "https://piper.old-games.ru/uploads/scans/2018/02/2018-02-23-20-15-20-1910.jpg",
    //   followed: true,
    //   fullName: "Svetlana",
    //   status: "wow",
    //   location: { City: "Vitebsk", Country: "Belarus" },
    // },
    // {
    //   id: 4,
    //   photoUrl: "https://piper.old-games.ru/uploads/scans/2018/02/2018-02-23-20-15-20-1910.jpg",
    //   followed: false,
    //   fullName: "Viktor",
    //   status: "optimist",
    //   location: { City: "Moscow", Country: "Russia" },
    // },
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export default usersReducer;
