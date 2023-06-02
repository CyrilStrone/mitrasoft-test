export enum ActionTypesAddPosts {
    SET_ADD_POSTS = "SET_ADD_POSTS",
    REMOVE_ADD_POSTS = "REMOVE_ADD_POSTS",
    SET_ADD_DEFAULT_POSTS = "SET_ADD_DEFAULT_POSTS",
    REMOVE_ADD_DEFAULT_POSTS = "REMOVE_ADD_DEFAULT_POSTS",
}

export const setAddPosts = (posts: any) => ({
    type: ActionTypesAddPosts.SET_ADD_POSTS,
    payload: posts,
});

export const removeAddPosts = (): any => ({
    type: ActionTypesAddPosts.REMOVE_ADD_POSTS,
});

export const setAddDefaultPosts = (posts: any) => ({
    type: ActionTypesAddPosts.SET_ADD_DEFAULT_POSTS,
    payload: posts,
});

export const removeAddDefaultPosts = (): any => ({
    type: ActionTypesAddPosts.REMOVE_ADD_DEFAULT_POSTS,
});