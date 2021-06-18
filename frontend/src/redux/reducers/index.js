import { combineReducers } from "redux";

import jobReducer from "./jobReducer";
import postReducer from "./postReducer";
import reactionReducer from "./reactionReducer";
import problemReducer from "./problemReducer";
import commentReducer from "./commentReducer";
import categorypReducer from "./categorypReducer";

export default combineReducers({
  jobReducer,
  postReducer,
  reactionReducer,
  problemReducer,
  commentReducer,
  categorypReducer,
});
