import { Reducer } from "redux";
import {
  ActionTypes,
  AddUserInfoAction,
  RemoveUserInfoAction,
} from "../../actions/userInfo/actions";

export interface userInfoState {
  userInfo: any | null;
}

const userInfoState: userInfoState = {
  userInfo: null,
};

export const userInfoReducer: Reducer<
  userInfoState,
  AddUserInfoAction | RemoveUserInfoAction
> = (state = userInfoState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case ActionTypes.REMOVE_USER_INFO:
      return {
        ...state,
        userInfo: null,
      };
    default:
      return state;
  }
};
