import { createStore, combineReducers } from "redux";
import { userInfoReducer, userInfoState } from "./reducers/userInfo/reducers";
import {
  userInfoCheckReducer,
  userInfoCheckState,
} from "./reducers/userInfoCheck/reducers";
import { userIdReducer, userIdStates } from "./reducers/userId/reducers";
import { sortReducer, sortState } from "./reducers/sortCheck/reducers";
import { sideBarReducer, sideBarState } from "./reducers/sideBarOpen/reducers";
import { searchReducer, searchState } from "./reducers/searchText/reducers";
import {
  paginationReducer,
  paginationState,
} from "./reducers/pagination/reducers";
import { commentsReducer, commentsState } from "./reducers/comments/reducers";
import {
  commentsCheckReducer,
  commentsCheckState,
} from "./reducers/commentsCheck/reducers";
import {
  postsCheckReducer,
  postsCheckState,
} from "./reducers/postsCheck/reducers";
import {
  postCommentsCheckReducer,
  postCommentsCheckState,
} from "./reducers/postCommentsCheck/reducers";
import { addPostsReducer, addPostsState } from "./reducers/addPosts/reducers";

export interface RootState {
  userInfo: userInfoState;
  userInfoCheck: userInfoCheckState;
  userId: userIdStates;
  sortCheck: sortState;
  sidebar: sideBarState;
  search: searchState;
  pagination: paginationState;
  comments: commentsState;
  commentsCheck: commentsCheckState;
  postsCheck: postsCheckState;
  postCommentsCheck: postCommentsCheckState;
  addPosts: addPostsState;
}

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  userInfoCheck: userInfoCheckReducer,
  userId: userIdReducer,
  sortCheck: sortReducer,
  sidebar: sideBarReducer,
  search: searchReducer,
  pagination: paginationReducer,
  comments: commentsReducer,
  commentsCheck: commentsCheckReducer,
  postsCheck: postsCheckReducer,
  postCommentsCheck: postCommentsCheckReducer,
  addPosts: addPostsReducer,
});

const store = createStore(rootReducer);

export default store;
