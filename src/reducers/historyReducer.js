import { HISTORY_UPDATED } from "../constants/redux";

export const historyUpdated = (state = false, action = {}) => {
  switch (action.type) {
    case HISTORY_UPDATED:
      return action.data;
    default:
      return state;
  }
};
