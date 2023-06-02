import { ActionTypesSideBarOpen } from "../../actions/sideBarOpen/actions";

export interface sideBarState {
  sidebarOpen: boolean | null;
}

const initialState: sideBarState = {
  sidebarOpen: false,
};

export const sideBarReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case ActionTypesSideBarOpen.SET_TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: action.payload,
      };
    case ActionTypesSideBarOpen.REMOVE_TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: false,
      };
    default:
      return state;
  }
};
