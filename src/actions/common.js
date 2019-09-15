import { LOADING } from "../constants/redux";

export const globalLoading = (loading = false, tail = "") => {
  return (dispatch, getState) => {
    dispatch({
      type: `${LOADING}${tail}`,
      loading,
      tail
    });
  };
};
