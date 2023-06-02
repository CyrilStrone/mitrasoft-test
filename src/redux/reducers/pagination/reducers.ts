import { ActionTypesPagination } from "../../actions/pagination/action";

export interface paginationState {
  currentPagination: number;
}

const initialState: paginationState = {
  currentPagination: 0,
};

const paginationReducer = (
  state = initialState,
  action: { type: any; payload: any }
): paginationState => {
  switch (action.type) {
    case ActionTypesPagination.SET_PAGINATION:
      return {
        ...state,
        currentPagination: action.payload,
      };
    case ActionTypesPagination.REMOVE_PAGINATION:
      return {
        ...state,
        currentPagination: 0,
      };
    default:
      return state;
  }
};

export default paginationReducer;
