import { createStore, AnyAction, Store } from 'redux';
import { Provider } from 'react-redux';
import headerReducer, { headerState } from './reducers';

const headerStore: Store<headerState, AnyAction> = createStore(headerReducer);

export default headerStore;
