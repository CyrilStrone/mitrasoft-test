export const OPEN_COMMENTS = 'OPEN_COMMENTS';
export const CLOSE_COMMENTS = 'CLOSE_COMMENTS';

export const openComments = (id: number) => ({
  type: OPEN_COMMENTS,
  payload: id,
});

export const closeComments = () => ({
  type: CLOSE_COMMENTS,
});