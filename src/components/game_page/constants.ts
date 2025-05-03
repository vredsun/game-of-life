export enum STATUS {
  IS_LIFE = 'IS_LIFE',
  IS_DEAD = 'IS_DEAD',
}
export const GRID_STROKE_SIZE = 0.5;
export const GRID_CELL_SIZE = 10;
export const GRID_X_CELLS_COUNT = 90;
export const GRID_Y_CELLS_COUNT = 60;

export const CANVAS_WIDTH = GRID_CELL_SIZE * GRID_X_CELLS_COUNT;
export const CANVAS_HEIGHT = GRID_CELL_SIZE * GRID_Y_CELLS_COUNT;

export const FRAME_TIME_MS = 50;