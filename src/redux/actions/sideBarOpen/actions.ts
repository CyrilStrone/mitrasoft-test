import { Action } from 'redux';

export enum ActionType {
  TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR',
}

export interface ToggleSidebarAction extends Action<ActionType.TOGGLE_SIDEBAR> {
  isOpen: boolean;
}

export function toggleSidebar(isOpen: boolean): ToggleSidebarAction {
  return {
    type: ActionType.TOGGLE_SIDEBAR,
    isOpen,
  };
}