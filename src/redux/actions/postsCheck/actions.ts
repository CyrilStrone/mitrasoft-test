export enum ActionTypesPostsCheck {
  SET_POSTS_CHECK = "SET_POSTS_CHECK",
  REMOVE_POSTS_CHECK = "REMOVE_POSTS_CHECK",
}

export const setPostsCheck = (check:boolean) => ({
  type: ActionTypesPostsCheck.SET_POSTS_CHECK,
  payload: check,
});

export const removePostsCheck = () => ({
  type: ActionTypesPostsCheck.REMOVE_POSTS_CHECK,
});
