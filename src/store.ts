import { createStore, AnyAction, Store } from 'redux';
import { Provider } from 'react-redux';
import headerReducer, { AppState } from './ui/header/logics/reducers';

const store: Store<AppState, AnyAction> = createStore(headerReducer);

export default store;
