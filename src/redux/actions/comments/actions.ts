export const addComment = (comment: any) => ({
  type: 'ADD_COMMENT',
  payload: comment,
});

export const clearComments = () => ({
  type: 'CLEAR_COMMENTS',
});