import { ActionTypesUserInfoCheck } from "../../actions/userInfoCheck/actions";

export interface userInfoCheckState {
  userInfoCheck: boolean | null;
}

const initialState: userInfoCheckState = {
  userInfoCheck: false,
};

const userInfoCheckReducer = (state = initialState, action: any): userInfoCheckState => {
  switch (action.type) {
    case ActionTypesUserInfoCheck.SET_USER_INFO_CHECK:
      return {
        ...state,
        userInfoCheck: action.payload,
      };
    case ActionTypesUserInfoCheck.REMOVE_USER_INFO_CHECK:
      return {
        ...state,
        userInfoCheck: true,
      };
    default:
      return state;
  }
};

export default userInfoCheckReducer;
