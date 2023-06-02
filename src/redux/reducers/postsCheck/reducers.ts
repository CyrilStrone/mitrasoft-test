import { ActionTypesPostsCheck } from "../../actions/postsCheck/actions";

export interface postsCheckState {
  postsCheck: boolean;
}

const initialState: postsCheckState = {
  postsCheck: true,
};

export const postsCheckReducer = (
  state = initialState,
  action: any
): postsCheckState => {
  switch (action.type) {
    case ActionTypesPostsCheck.SET_POSTS_CHECK:
      return {
        ...state,
        postsCheck: action.payload,
      };
    case ActionTypesPostsCheck.REMOVE_POSTS_CHECK:
      return {
        ...state,
        postsCheck: true,
      };
    default:
      return state;
  }
};
