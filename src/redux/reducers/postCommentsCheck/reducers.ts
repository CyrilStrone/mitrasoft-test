import { ActionTypesPostCommentsCheck } from "../../actions/postCommentsCheck/actions";

export interface postCommentsCheckState {
  postCommentsCheck: boolean | null;
}

const initialState: postCommentsCheckState = {
  postCommentsCheck: false,
};

export const postCommentsCheckReducer = (
  state = initialState,
  action: any
): postCommentsCheckState => {
  switch (action.type) {
    case ActionTypesPostCommentsCheck.SET_POST_COMMENTS_CHECK:
      return {
        ...state,
        postCommentsCheck: action.payload,
      };
    case ActionTypesPostCommentsCheck.REMOVE_POST_COMMENTS_CHECK:
      return {
        ...state,
        postCommentsCheck: true,
      };
    default:
      return state;
  }
};
