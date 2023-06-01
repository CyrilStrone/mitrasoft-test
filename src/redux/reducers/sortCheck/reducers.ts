export interface SortState {
  sortCheck: boolean | null;
}

const initialState: SortState = {
  sortCheck: null,
};

const sortReducer = (state = initialState, action: any): SortState => {
  switch (action.type) {
    case 'SET_SORT_CHECK':
      return {
        ...state,
        sortCheck: action.payload,
      };
    default:
      return state;
  }
};

export default sortReducer;