export enum ActionTypesSearch {
  SET_SEARCH_TEXT = "SET_SEARCH_TEXT",
  REMOVE_SEARCH_TEXT = "REMOVE_USER_INFO",
}

export const setSearchText = (text: string) => ({
  type: ActionTypesSearch.SET_SEARCH_TEXT,
  payload: text,
});

export const removeSearchText = (): any => ({
  type: ActionTypesSearch.REMOVE_SEARCH_TEXT,
});
