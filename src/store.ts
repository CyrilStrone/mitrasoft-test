import { createStore, AnyAction, Store } from 'redux';
import { Provider } from 'react-redux';
import headerReducer, { headerState } from './ui/header/logics/reducers';

const store: Store<headerState, AnyAction> = createStore(headerReducer);

export default store;
