
import { isNumber } from 'util';

import Square from '~components/game_page/square/Square';
import { STATUS } from '~components/game_page/constants';

let last_hover: Square | null = null;

export const setHalfHoverSquare = (isHover: boolean, matrix: Square[][], x?: number, y?: number) => {
  if (isNumber(x) && isNumber(y)) {
    for(let i = 0, length_i = matrix.length; i < length_i; i += 1) {
      matrix[i][y].changeHalfHover(isHover);
    }
    for(let j = 0, length_j = matrix[x].length; j < length_j; j += 1) {
      matrix[x][j].changeHalfHover(isHover);
    }
  }
};

export const checkOnHoverMatrix = (matrix: Square[][], x?: number, y?: number) => {
  if (last_hover?.checkOnHover(x, y)) {
    return last_hover;
  } else {
    setHalfHoverSquare(false, matrix, last_hover?._x, last_hover?._y);
    last_hover = null;
  }

  if (isNumber(x) && isNumber(y)) {
    for(let i = 0, length_i = matrix.length; i < length_i; i += 1) {
      for(let j = 0, length_j = matrix[i].length; j < length_j; j += 1) {
        const isHover = matrix[i][j].checkOnHover(x, y);

        if (isHover) {
          setHalfHoverSquare(false, matrix, last_hover?._x, last_hover?._y);
          last_hover?.checkOnHover(null, null);

          last_hover = matrix[i][j];
          setHalfHoverSquare(true, matrix, last_hover?._x, last_hover?._y);

          return matrix[i][j];
        }
      }
    }
  }
};

export const clickOnHoverSquare = (check_status?: STATUS) => {
  if (check_status) {
    if (check_status === last_hover?.status) {
      last_hover?.toggleLifeStatus();
    }
  } else {
    last_hover?.toggleLifeStatus();
  }
};
