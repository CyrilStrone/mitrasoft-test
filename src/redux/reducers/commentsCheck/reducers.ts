import { ActionTypesCommentsCheck } from "../../actions/commentsCheck/actions";

export interface commentsCheckState {
  openCommentsId: number | null;
}

const initialState: commentsCheckState = {
  openCommentsId: null,
};

const commentsCheckReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypesCommentsCheck.OPEN_COMMENTS:
      return {
        ...state,
        openCommentsId: action.payload,
      };
    case ActionTypesCommentsCheck.CLOSE_COMMENTS:
      return {
        ...state,
        openCommentsId: null,
      };
    default:
      return state;
  }
};

export default commentsCheckReducer;
