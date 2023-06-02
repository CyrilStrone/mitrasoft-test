import { ActionTypesUserId } from "../../actions/userId/actions";

export interface userIdStates {
  userId: number | null;
}

const initialState: userIdStates = {
  userId: null,
};

export const userIdReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case ActionTypesUserId.SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case ActionTypesUserId.REMOVE_USER_ID:
      return {
        ...state,
        userInfo: null,
      };
    default:
      return state;
  }
};
