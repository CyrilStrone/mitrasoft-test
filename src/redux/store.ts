import { createStore, combineReducers } from "redux";
import { headerReducer, sideBarState } from "./reducers/sideBarOpen/reducers";
import commentsReducer, {
  commentsState,
} from "./reducers/commentOpen/reducers";
import userIdReducer, { userIdStates } from "./reducers/userId/reducers";
import addPostsReducer, { addPostsState } from "./reducers/addPosts/reducers";
import paginationReducer, {
  paginationState,
} from "./reducers/pagination/reducers";
import { userInfoReducer, userInfoState } from "./reducers/userInfo/reducers";
import commentListReducer, {
  commentListState,
} from "./reducers/comments/reducers";
import searchReducer, { SearchState } from "./reducers/search/reducers";
import sortReducer, { SortState } from "./reducers/sortCheck/reducers";
import addDefaultPostsReducer, { addDefaultPostsState } from "./reducers/addDefaultPost/reducers";

export interface RootState {
  sidebar: sideBarState;
  comments: commentsState;
  userId: userIdStates;
  userInfo: userInfoState;
  addPosts: addPostsState;
  addDefaultPosts: addDefaultPostsState;
  pagination: paginationState;
  commentList: commentListState;
  search: SearchState;
  sortCheck: SortState;
}

const rootReducer = combineReducers({
  sidebar: headerReducer,
  comments: commentsReducer,
  userId: userIdReducer,
  userInfo: userInfoReducer,
  addPosts: addPostsReducer,
  addDefaultPosts: addDefaultPostsReducer,
  pagination: paginationReducer,
  commentList: commentListReducer,
  search: searchReducer,
  sortCheck: sortReducer,
});

const store = createStore(rootReducer);

export default store;
