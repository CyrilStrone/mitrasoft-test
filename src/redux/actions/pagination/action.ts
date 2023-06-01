export const actionTypes = {
  SET_PAGE: "SET_PAGE",
  INCREASE_PAGE: "INCREASE_PAGE",
};

export const setPage = (page: any) => ({
  type: actionTypes.SET_PAGE,
  payload: page,
});

