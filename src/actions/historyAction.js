import { HISTORY_UPDATED } from "../constants/redux";

export const notifyHistoryUpdated = () => {
  return (dispatch, getState) => {
    dispatch({
      type: HISTORY_UPDATED,
      data: !getState().historyUpdated
    });
  };
};
