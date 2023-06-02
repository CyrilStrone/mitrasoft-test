export enum ActionTypesComments {
  SET_COMMENTS = "SET_COMMENTS",
  REMOVE_COMMENTS = "REMOVE_COMMENTS",
}

export const setComments = (comment: any) => ({
  type: ActionTypesComments.SET_COMMENTS,
  payload: comment,
});

export const removeComments = (): any => ({
  type: ActionTypesComments.REMOVE_COMMENTS,
});
