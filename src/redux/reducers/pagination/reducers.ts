import { actionTypes } from "../../actions/pagination/action";

export interface paginationState {
  currentPage: 0;
}

const paginationState: paginationState = {
  currentPage: 0,
};
const paginationReducer = (
  state = paginationState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case actionTypes.SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default paginationReducer;
