import { actionTypes } from "../../actions/addPosts/action";

export interface addPostsState {
  posts: [];
}

const initialState: addPostsState = {
  posts: [],
};

const addPostsReducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case actionTypes.ADD_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default addPostsReducer;
