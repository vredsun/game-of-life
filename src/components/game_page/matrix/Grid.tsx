import { head, nth, size } from "lodash";
import { STATUS } from "../constants";
import Cell from "./cell/Cell";
import { CellColorName } from "./cell/types";
import { getRandomCellStatus, getRandomGrid } from "./utils/get-random-grid";

class Grid {
  #ctx: CanvasRenderingContext2D;
  #grid: Array<Array<Cell>>;
  #hoveredCell: Cell | null = null;
  #fixesHoveredCellStatus: STATUS | null = null;

  constructor(ctx: CanvasRenderingContext2D, activeColor: CellColorName) {
    this.#ctx = ctx;
    this.#grid = getRandomGrid(activeColor);
  };

  #changeHoveredLinesStatus = ({ row, column, isHovered }: { row: number; column: number; isHovered: boolean }) => {
    const gridRowsCount = size(this.#grid);
    const gridColumnsount = size(this.#grid[row]);

    for(let i = 0; i < gridRowsCount; i += 1) {
      nth(nth(this.#grid, i), column)?.changeHalfHover(isHovered);
    }
    for(let j = 0; j < gridColumnsount; j += 1) {
      nth(nth(this.#grid, row), j)?.changeHalfHover(isHovered);
    }
  }

  #toggleCurrentHoveredCell = (activeColor: CellColorName) => {
    if (this.#hoveredCell && this.#fixesHoveredCellStatus) {
      this.#hoveredCell.nextStatus = this.#fixesHoveredCellStatus === STATUS.IS_DEAD ? STATUS.IS_LIFE : STATUS.IS_DEAD;
      this.#hoveredCell.baseColor = activeColor;
      this.#hoveredCell.render(this.#ctx);
    }
  }

  #getCellNeighbors = ({ row, column }: { row: number; column: number }): Array<Cell> => {
    const min_i = Math.max(0, row - 1);
    const max_i = Math.min(size(this.#grid) - 1, row + 1);
    const min_j = Math.max(0, column - 1);
    const max_j = Math.min(size(head(this.#grid)) - 1, column + 1);

    const neighbors: Array<Cell> = [];

    for(let i = min_i; i <= max_i; i += 1) {
      for(let j = min_j; j <= max_j; j += 1) {
        const tempCell = this.#grid[i][j];

        if (i !== row || j !== column) {
          neighbors.push(tempCell);
        }
      }
    }

    return neighbors;
  }

  randomFill = (activeColor: CellColorName) => {
    for (const rows of this.#grid) {
      for (const cell of rows) {
        cell.baseColor = activeColor;
        cell.status = getRandomCellStatus();
      }
    }

    this.render();
  }

  clear = () => {
    for (const rows of this.#grid) {
      for (const cell of rows) {
        cell.dieCell();
      }
    }

    this.render();
  }

  checkOnAlive = (): boolean => {
    let hasChanges = false;
    let row = 0;

    for (const rows of this.#grid) {
      let column = 0;

      for (const cell of rows) {
        const neighbors = this.#getCellNeighbors({ row: row, column: column });

        const isChangedStatus = cell.checkStatus(neighbors);
        hasChanges ||= isChangedStatus;

        column += 1;
      }

      row += 1;
    }

    return hasChanges;
  }

  fixHoveredCellStatus = (activeColor: CellColorName) => {
    this.#fixesHoveredCellStatus = this.#hoveredCell?.status ?? null;

    this.#toggleCurrentHoveredCell(activeColor);
  }

  resetHoveredCellStatus = () => {
    this.#fixesHoveredCellStatus = null;
  }

  resetHoveredCell = () => {
    if (!this.#hoveredCell) {
      return;
    }

    this.#hoveredCell.changeHover(false);

    this.#changeHoveredLinesStatus({
      row: this.#hoveredCell._x,
      column: this.#hoveredCell._y,
      isHovered: false,
    })
    
    this.#hoveredCell = null;
  }

  hoverCell = ({ activeColor, row, column }: { activeColor: CellColorName; row: number; column: number }) => {
    this.resetHoveredCell();

    this.#hoveredCell = nth(nth(this.#grid, row), column) ?? null;

    if (!this.#hoveredCell) {
      return;
    }

    this.#changeHoveredLinesStatus({
      row,
      column,
      isHovered: true,
    })

    this.#hoveredCell.changeHover(true);
    this.#toggleCurrentHoveredCell(activeColor);
  }

  render = () => {
    for (const rows of this.#grid) {
      for (const cell of rows) {
        cell.render(this.#ctx);
      }
    }
  }
}


export default Grid;
