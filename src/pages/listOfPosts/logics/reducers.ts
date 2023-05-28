import { OPEN_COMMENTS, CLOSE_COMMENTS } from './actions';

export interface commentsState {
  openCommentsId: number | null;
}

const commentsState: commentsState = {
  openCommentsId: null,
};

const commentsReducer = (state = commentsState, action: any) => {
  switch (action.type) {
    case OPEN_COMMENTS:
      return {
        ...state,
        openCommentsId: action.payload,
      };
    case CLOSE_COMMENTS:
      return {
        ...state,
        openCommentsId: null,
      };
    default:
      return state;
  }
};

export default commentsReducer;