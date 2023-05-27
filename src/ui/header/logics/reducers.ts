import { Reducer } from 'redux';
import { ActionType, ToggleSidebarAction } from './actions';

export interface AppState {
  sidebarOpen: boolean;
}

const initialState: AppState = {
  sidebarOpen: false,
};

const headerReducer: Reducer<AppState, ToggleSidebarAction> = (state = initialState, action) => {
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