import { createStore, AnyAction, Store } from "redux";
import { Provider } from "react-redux";
import commentsReducer, { commentsState } from "./reducers";

const commentsStore: Store<commentsState, AnyAction> =
  createStore(commentsReducer);

export default commentsStore;
