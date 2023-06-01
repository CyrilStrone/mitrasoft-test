export const setSearchText = (text: string) => ({
  type: 'SET_SEARCH_TEXT',
  payload: text,
});

export const clearSearchText = () => ({
  type: 'CLEAR_SEARCH_TEXT',
});