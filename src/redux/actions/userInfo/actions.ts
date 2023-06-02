export enum ActionTypesUserInfo {
  SET_USER_INFO = "SET_USER_INFO",
  REMOVE_USER_INFO = "REMOVE_USER_INFO",
}

export const setUserInfo = (userInfo: any) => ({
  type: ActionTypesUserInfo.SET_USER_INFO,
  payload: userInfo,
});

export const removeUserInfo = (): any => ({
  type: ActionTypesUserInfo.REMOVE_USER_INFO,
});
