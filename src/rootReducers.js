import { combineReducers } from "redux";
import { historyUpdated } from "./reducers/historyReducer";
import { loading } from "./reducers/common";

export default combineReducers({
  historyUpdated,
  loading
});
