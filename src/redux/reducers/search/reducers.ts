export interface SearchState {
  searchText: string;
}

const initialState: SearchState = {
  searchText: '',
};

const searchReducer = (state = initialState, action: any): SearchState => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.payload,
      };
    case 'CLEAR_SEARCH_TEXT':
      return {
        ...state,
        searchText: '',
      };
    default:
      return state;
  }
};

export default searchReducer;