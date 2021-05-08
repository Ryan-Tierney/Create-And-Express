import { currentUserReducer } from "./currentUser";
import { creationsReducer } from "./creations";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  creations: creationsReducer
});

export default rootReducer;
