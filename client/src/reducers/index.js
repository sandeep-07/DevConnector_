import { combineReducers } from "redux";
import alert from "./alert";
import AuthReducer from "./auth";
import ProfileReducer from "./profile";
import postReducer from "./post";

export default combineReducers({
  alert,
  auth: AuthReducer,
  profile: ProfileReducer,
});
