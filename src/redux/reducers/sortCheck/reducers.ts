import { ActionTypesSortCheck } from "../../actions/sortCheck/actions";

export interface sortState {
  sortCheck: boolean | null;
}

const initialState: sortState = {
  sortCheck: null,
};

const sortReducer = (state = initialState, action: any): sortState => {
  switch (action.type) {
    case ActionTypesSortCheck.SET_SORT_CHECK:
      return {
        ...state,
        sortCheck: action.payload,
      };
    case ActionTypesSortCheck.REMOVE_SORT_CHECK:
      return {
        ...state,
        sortCheck: null,
      };
    default:
      return state;
  }
};

export default sortReducer;
