import { ActionTypesComments } from "../../actions/comments/actions";

export interface commentsState {
  comments: any[];
}

const initialState: commentsState = {
  comments: [],
};

export const commentsReducer = (
  state = initialState,
  action: any
): commentsState => {
  switch (action.type) {
    case ActionTypesComments.SET_COMMENTS:
      console.log("SET_COMMENTS", action.type, action.payload);
      return {
        ...state,
        comments: action.payload,
      };
    case ActionTypesComments.REMOVE_COMMENTS:
      console.log("REMOVE_COMMENTS", action.type, action.payload);
      return {
        ...state,
        comments: [],
      };
    default:
      return state;
  }
};
