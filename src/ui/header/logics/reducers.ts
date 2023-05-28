import { Reducer } from 'redux';
import { ActionType, ToggleSidebarAction } from './actions';

export interface headerState {
  sidebarOpen: boolean;
}

const initialState: headerState = {
  sidebarOpen: false,
};

const headerReducer: Reducer<headerState, ToggleSidebarAction> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: action.isOpen,
      };
    default:
      return state;
  }
};

export default headerReducer;