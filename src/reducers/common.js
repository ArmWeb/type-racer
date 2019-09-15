import { LOADING } from "../constants/redux";

export const loading = (state = false, action = {}) => {
  switch (action.type) {
    case `${LOADING}${action.tail}`:
      return action.loading;
    default:
      return state;
  }
};
