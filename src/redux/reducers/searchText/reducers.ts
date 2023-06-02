import { ActionTypesSearch } from "../../actions/searchText/action";

export interface searchState {
  searchText: string;
}

const initialState: searchState = {
  searchText: "",
};

export const searchReducer = (
  state = initialState,
  action: any
): searchState => {
  switch (action.type) {
    case ActionTypesSearch.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    case ActionTypesSearch.REMOVE_SEARCH_TEXT:
      return {
        ...state,
        searchText: "",
      };
    default:
      return state;
  }
};
