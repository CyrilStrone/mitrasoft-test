import { createStore, combineReducers } from "redux";
import { headerReducer, sideBarState } from "./reducers/sideBarOpen/reducers";
import commentsReducer, { commentsState } from "./reducers/commentOpen/reducers";

export interface RootState {
  sidebar: sideBarState;
  comments: commentsState;
}

const rootReducer = combineReducers({
  sidebar: headerReducer,
  comments: commentsReducer
});

const store = createStore(rootReducer);

export default store;
