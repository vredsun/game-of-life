import { random, size } from "lodash";
import { GRID_CELL_SIZE, GRID_X_CELLS_COUNT, GRID_Y_CELLS_COUNT, STATUS } from "~components/game_page/constants";
import Cell from "../cell/Cell";
import { CellColorName } from "../cell/types";

const OPTIONS_FOR_RANDOM_STATUS = [STATUS.IS_DEAD, STATUS.IS_DEAD, STATUS.IS_LIFE];

export const getRandomCellStatus = (): STATUS => OPTIONS_FOR_RANDOM_STATUS[random(0, size(OPTIONS_FOR_RANDOM_STATUS) - 1)];

export const getRandomGrid = (baseColor: CellColorName): Array<Array<Cell>> => {
  const grid: Array<Array<Cell>> = [];

  for(let x = 0; x < GRID_X_CELLS_COUNT; x += 1) {
    grid.push([]);

    for(let y = 0; y < GRID_Y_CELLS_COUNT; y += 1) {
      grid[x].push(
        new Cell({
          baseColor,
          status: getRandomCellStatus(),
          x,
          y,
          coords: [
            GRID_CELL_SIZE * x,
            GRID_CELL_SIZE * y,
            GRID_CELL_SIZE,
            GRID_CELL_SIZE,
          ],
        })
      );
    }
  }

  return grid;
}