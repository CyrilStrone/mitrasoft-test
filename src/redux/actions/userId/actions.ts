export enum ActionTypes {
  SET_USER_ID = "SET_USER_ID"
}

export const setUserId = (id: any) => ({
  type: ActionTypes.SET_USER_ID,
  payload: id,
});