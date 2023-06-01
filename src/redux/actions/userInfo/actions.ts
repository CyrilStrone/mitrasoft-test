import { Action } from "redux";

// Определение типов действий
export enum ActionTypes {
  ADD_USER_INFO = "ADD_USER_INFO",
  REMOVE_USER_INFO = "REMOVE_USER_INFO",
}

// Интерфейс действия добавления информации о пользователе
export interface AddUserInfoAction extends Action<ActionTypes.ADD_USER_INFO> {
  payload: any;
}

export interface RemoveUserInfoAction
  extends Action<ActionTypes.REMOVE_USER_INFO> {}

export const addUserInfo = (userInfo: any): AddUserInfoAction => ({
  type: ActionTypes.ADD_USER_INFO,
  payload: userInfo,
});

export const removeUserInfo = (): RemoveUserInfoAction => ({
  type: ActionTypes.REMOVE_USER_INFO,
});
