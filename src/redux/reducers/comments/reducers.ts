export interface commentListState {
  comments: any[];
}

const initialState: commentListState = {
  comments: [],
};

const commentListReducer = (state = initialState, action: any): commentListState => {
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        comments: action.payload,
      };
    case "CLEAR_COMMENTS":
      return {
        ...state,
        comments: [],
      };
    default:
      return state;
  }
};

export default commentListReducer;
