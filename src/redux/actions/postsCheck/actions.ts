export enum ActionTypesPostsCheck {
  OPEN_POSTS = "OPEN_POSTS",
  CLOSE_POSTS = "CLOSE_POSTS",
}

export const openPosts = () => ({
  type: ActionTypesPostsCheck.OPEN_POSTS,
});

export const closePosts = () => ({
  type: ActionTypesPostsCheck.CLOSE_POSTS,
});
