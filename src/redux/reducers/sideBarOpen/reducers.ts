import { Reducer } from "redux";
import {
  ActionType,
  ToggleSidebarAction,
} from "../../actions/sideBarOpen/actions";

export interface sideBarState {
  sidebarOpen: boolean;
}

const initialState: sideBarState = {
  sidebarOpen: false,
};

export const headerReducer: Reducer<sideBarState, ToggleSidebarAction> = (
  state = initialState,
  action
) => {
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
