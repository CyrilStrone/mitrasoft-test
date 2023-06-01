import { actionTypes } from "../../actions/addDefaultPost/action";

export interface addDefaultPostsState {
  defaultPost:[];
}

const initialState: addDefaultPostsState = {
  defaultPost: []
};

const addDefaultPostsReducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case actionTypes.ADD_DEFAULT_POSTS:
      return {
        ...state,
        defaultPost: action.payload,
      };
    default:
      return state;
  }
};

export default addDefaultPostsReducer;
