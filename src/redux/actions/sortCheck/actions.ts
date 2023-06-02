export enum ActionTypesSortCheck {
  SET_SORT_CHECK = "SET_SORT_CHECK",
  REMOVE_SORT_CHECK = "REMOVE_SORT_CHECK",
}
export const setSortCheck = (check: boolean) => ({
  type: ActionTypesSortCheck.SET_SORT_CHECK,
  payload: check,
});

export const removeSortCheck = (): any => ({
  type: ActionTypesSortCheck.REMOVE_SORT_CHECK,
});