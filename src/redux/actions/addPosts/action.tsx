export const actionTypes = {
    ADD_POSTS: 'ADD_POSTS',
};

export const addPosts = (posts: any) => ({
    type: actionTypes.ADD_POSTS,
    payload: posts,
});