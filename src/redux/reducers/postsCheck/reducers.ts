import { ActionTypesPostsCheck } from "../../actions/postsCheck/actions";

export interface postsCheckState {
  postsCheck: boolean;
}

const initialState: postsCheckState = {
  postsCheck: true,
};

const postsCheckReducer = (state = initialState, action: any): postsCheckState => {
  switch (action.type) {
    case ActionTypesPostsCheck.OPEN_POSTS:
      return {
        ...state,
        postsCheck: true,
      };
    case ActionTypesPostsCheck.CLOSE_POSTS:
      return {
        ...state,
        postsCheck: false,
      };
    default:
      return state;
  }
};

export default postsCheckReducer;
