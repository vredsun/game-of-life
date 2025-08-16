import type { CellColorName } from "~components/game_page/matrix/cell/types";
import { WorkerEnumTypes, WorkerResultEnumTypes } from "./event-types";

export const getSetCanvasAction = (canvas: OffscreenCanvas) => ({
  type: WorkerEnumTypes.SET_CANVAS,
  canvas,
} as const)


export const getInitGridAction = (activeColor: CellColorName) => ({
  type: WorkerEnumTypes.INIT_GRID,
  activeColor,
} as const)


export const getPlayAction = () => ({
  type: WorkerEnumTypes.PLAY,
} as const)

export const getPauseAction = () => ({
  type: WorkerEnumTypes.PAUSE,
} as const)

export const getClearAction = () => ({
  type: WorkerEnumTypes.CLEAR,
} as const)

export const getRandomFillAction = (activeColor: CellColorName) => ({
  type: WorkerEnumTypes.RANDOM_FILL,
  activeColor,
} as const)

export const getHoverCellAction = (params: { activeColor: CellColorName; row: number; column: number }) => ({
  type: WorkerEnumTypes.HOVER_CELL,
  params,
} as const)

export const getResetHoveredCellAction = () => ({
  type: WorkerEnumTypes.RESET_HOVERED_CELL,
} as const)

export const getFixHoveredCellStatusAction = (activeColor: CellColorName) => ({
  type: WorkerEnumTypes.FIX_HOVERED_CELL_STATUS,
  activeColor,
} as const)

export const getResetHoveredCellStatusAction = () => ({
  type: WorkerEnumTypes.RESET_HOVERED_CELL_STATUS,
} as const)


export const getFinishedPlayAction = () => ({
  type: WorkerResultEnumTypes.FINISHED_ACTION,
})