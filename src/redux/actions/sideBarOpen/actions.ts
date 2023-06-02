export enum ActionTypesSideBarOpen {
  SET_TOGGLE_SIDEBAR = "SET_TOGGLE_SIDEBAR",
  REMOVE_TOGGLE_SIDEBAR = "REMOVE_TOGGLE_SIDEBAR",
}

export const setSideBarOpen = (isOpen: boolean) => ({
  type: ActionTypesSideBarOpen.SET_TOGGLE_SIDEBAR,
  payload: isOpen,
});

export const removeSideBarOpen = (): any => ({
  type: ActionTypesSideBarOpen.REMOVE_TOGGLE_SIDEBAR,
});

