import { ActionTypesComments } from "../../actions/comments/actions";

export interface commentsState {
  comments: any[];
}

const initialState: commentsState = {
  comments: [],
};

const commentsReducer = (state = initialState, action: any): commentsState => {
  switch (action.type) {
    case ActionTypesComments.SET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case ActionTypesComments.REMOVE_COMMENTS:
      return {
        ...state,
        comments: [],
      };
    default:
      return state;
  }
};

export default commentsReducer;
