import { ActionTypesUserInfo } from "../../actions/userInfo/actions";

export interface userInfoState {
  userInfo: any | null;
}

const initialState: userInfoState = {
  userInfo: null,
};

export const userInfoReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case ActionTypesUserInfo.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case ActionTypesUserInfo.REMOVE_USER_INFO:
      return {
        ...state,
        userInfo: null,
      };
    default:
      return state;
  }
};
