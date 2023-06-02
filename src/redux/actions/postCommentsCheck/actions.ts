export enum ActionTypesPostCommentsCheck {
  SET_POST_COMMENTS_CHECK = "SET_POST_COMMENTS_CHECK",
  REMOVE_POST_COMMENTS_CHECK = "REMOVE_POST_COMMENTS_CHECK",
}
export const setPostCommentsCheck = (check: boolean) => ({
  type: ActionTypesPostCommentsCheck.SET_POST_COMMENTS_CHECK,
  payload: check,
});

export const removePostCommentsCheck = (): any => ({
  type: ActionTypesPostCommentsCheck.REMOVE_POST_COMMENTS_CHECK,
});