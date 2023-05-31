import { Action } from 'redux';

export enum ActionTypes {
  TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR',
}

export interface ToggleSidebarAction extends Action<ActionTypes.TOGGLE_SIDEBAR> {
  isOpen: boolean;
}

export function toggleSidebar(isOpen: boolean): ToggleSidebarAction {
  return {
    type: ActionTypes.TOGGLE_SIDEBAR,
    isOpen,
  };
}