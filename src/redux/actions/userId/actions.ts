export enum ActionTypesUserId {
  SET_USER_ID = "SET_USER_ID",
  REMOVE_USER_ID = "REMOVE_USER_ID",
}

export const setUserId = (id: any) => ({
  type: ActionTypesUserId.SET_USER_ID,
  payload: id,
});

export const removeUserId = (): any => ({
  type: ActionTypesUserId.REMOVE_USER_ID,
});
