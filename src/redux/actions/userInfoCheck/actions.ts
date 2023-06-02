export enum ActionTypesUserInfoCheck {
  SET_USER_INFO_CHECK = "SET_USER_INFO_CHECK",
  REMOVE_USER_INFO_CHECK = "REMOVE_USER_INFO_CHECK",
}
export const setUserInfoCheck = (check: boolean) => ({
  type: ActionTypesUserInfoCheck.SET_USER_INFO_CHECK,
  payload: check,
});

export const removeUserInfoCheck = (): any => ({
  type: ActionTypesUserInfoCheck.REMOVE_USER_INFO_CHECK,
});