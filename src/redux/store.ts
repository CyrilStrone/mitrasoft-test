import { createStore, combineReducers } from "redux";
import { headerReducer, sideBarState } from "./reducers/sideBarOpen/reducers";
import commentsReducer, { commentsState } from "./reducers/commentOpen/reducers";
import userIdReducer, { userIdStates } from "./reducers/userId/reducers";
import addPostsReducer, { addPostsState } from "./reducers/addPosts/reducers";
import paginationReducer, { paginationState } from "./reducers/pagination/reducers";

export interface RootState {
  sidebar: sideBarState;
  comments: commentsState;
  userId: userIdStates;
  addPosts: addPostsState;
  pagination: paginationState,
}

const rootReducer = combineReducers({
  sidebar: headerReducer,
  comments: commentsReducer,
  userId: userIdReducer,
  addPosts: addPostsReducer,
  pagination: paginationReducer,
});

const store = createStore(rootReducer);

export default store;
