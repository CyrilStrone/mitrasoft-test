export enum ActionTypesCommentsCheck {
  OPEN_COMMENTS = "OPEN_COMMENTS",
  CLOSE_COMMENTS = "CLOSE_COMMENTS",
}

export const openComments = (id: number) => ({
  type: ActionTypesCommentsCheck.OPEN_COMMENTS,
  payload: id,
});

export const closeComments = () => ({
  type: ActionTypesCommentsCheck.CLOSE_COMMENTS,
});
