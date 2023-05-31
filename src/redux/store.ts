import { createStore, combineReducers } from "redux";
import { headerReducer, sideBarState } from "./reducers/sideBarOpen/reducers";
import commentsReducer, { commentsState } from "./reducers/commentOpen/reducers";
import userIdReducer, { userIdStates } from "./reducers/userId/reducers";
import addPostsReducer, { initialState } from "./reducers/addPosts/reducers";

export interface RootState {
  sidebar: sideBarState;
  comments: commentsState;
  userId: userIdStates;
  addPosts: initialState;
}

const rootReducer = combineReducers({
  sidebar: headerReducer,
  comments: commentsReducer,
  userId: userIdReducer,
  addPosts: addPostsReducer
});

const store = createStore(rootReducer);

export default store;
