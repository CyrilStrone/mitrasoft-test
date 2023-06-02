export enum ActionTypesPagination {
  SET_PAGINATION = "SET_PAGINATION",
  REMOVE_PAGINATION = "REMOVE_PAGINATION",
}

export const setPagination = (page: any) => ({
  type: ActionTypesPagination.SET_PAGINATION,
  payload: page,
});

export const removePagination = (): any => ({
  type: ActionTypesPagination.REMOVE_PAGINATION,
});
