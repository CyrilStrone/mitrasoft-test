import { ActionTypesAddPosts } from "../../actions/addPosts/action";

export interface addPostsState {
  posts: any[];
  defaultPosts: any[];
}

const initialState: addPostsState = {
  posts: [],
  defaultPosts: [],
};

const addPostsReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case ActionTypesAddPosts.SET_ADD_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ActionTypesAddPosts.SET_ADD_DEFAULT_POSTS:
      return {
        ...state,
        defaultPosts: action.payload,
      };
    case ActionTypesAddPosts.REMOVE_ADD_POSTS:
      return {
        ...state,
        posts: [],
      };
    case ActionTypesAddPosts.REMOVE_ADD_DEFAULT_POSTS:
      return {
        ...state,
        defaultPosts: [],
      };
    default:
      return state;
  }
};

export default addPostsReducer;
