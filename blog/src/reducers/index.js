import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import userReducer from "./usersReducers";

export default combineReducers({
  posts: postsReducer,
  users: userReducer,
});
