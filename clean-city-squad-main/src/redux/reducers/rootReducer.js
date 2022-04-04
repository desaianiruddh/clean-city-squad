import { combineReducers } from "redux";

import adminReducer from "./admin";
import signUpReducer from "./signup";

const rootReducer = combineReducers({
   adminReducer,
  signUpReducer
});

export default rootReducer;
