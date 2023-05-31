import { ActionTypes } from "../../actions/userId/actions";

export interface userIdStates {
  userId: number | null;
}

const userIdStates: userIdStates = {
  userId: null,
};

const userIdReducer = (state = userIdStates, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case ActionTypes.SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};

export default userIdReducer;