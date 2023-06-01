export const actionTypes = {
    ADD_DEFAULT_POSTS: 'ADD_DEFAULT_POSTS',
};

export const addDefaultPost = (posts: any) => ({
    type: actionTypes.ADD_DEFAULT_POSTS,
    payload: posts,
});