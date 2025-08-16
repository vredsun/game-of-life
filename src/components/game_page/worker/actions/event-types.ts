import { getClearAction, getFinishedPlayAction, getFixHoveredCellStatusAction, getHoverCellAction, getInitGridAction, getPauseAction, getPlayAction, getRandomFillAction, getResetHoveredCellAction, getResetHoveredCellStatusAction, getSetCanvasAction } from "./make-action";

export enum WorkerEnumTypes {
  SET_CANVAS = 'SET_CANVAS',
  INIT_GRID = 'INIT_GRID',
  PLAY = 'PLAY',
  PAUSE = 'PAUSE',
  CLEAR = 'CLEAR',
  RANDOM_FILL = 'RANDOM_FILL',
  HOVER_CELL = 'HOVER_CELL',
  RESET_HOVERED_CELL = 'RESET_HOVERED_CELL',
  FIX_HOVERED_CELL_STATUS = 'FIX_HOVERED_CELL_STATUS',
  RESET_HOVERED_CELL_STATUS = 'RESET_HOVERED_CELL_STATUS',
}


export enum WorkerResultEnumTypes {
  FINISHED_ACTION = 'FINISHED_ACTION',
}

export type SetCanvasAction = ReturnType<typeof getSetCanvasAction>
export type InitGridAction = ReturnType<typeof getInitGridAction>
export type PlayAction= ReturnType<typeof getPlayAction>
export type PauseAction = ReturnType<typeof getPauseAction>
export type GetClearAction = ReturnType<typeof getClearAction>
export type GetRandomFillAction = ReturnType<typeof getRandomFillAction>
export type GetHoverCellAction = ReturnType<typeof getHoverCellAction>
export type GetResetHoveredCellAction = ReturnType<typeof getResetHoveredCellAction>
export type GetFxHoveredCellStatusAction = ReturnType<typeof getFixHoveredCellStatusAction>
export type GetResetHoveredCellStatusAction = ReturnType<typeof getResetHoveredCellStatusAction>


export type WorkerEvents = (
  | SetCanvasAction
  | InitGridAction
  | PlayAction
  | PauseAction
  | GetClearAction
  | GetRandomFillAction
  | GetHoverCellAction
  | GetResetHoveredCellAction
  | GetFxHoveredCellStatusAction
  | GetResetHoveredCellStatusAction
);


export type GetFinishedPlayAction = ReturnType<typeof getFinishedPlayAction>

export type WorkerResultEvents = (
  | GetFinishedPlayAction
);