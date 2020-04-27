import Square from '~components/game_page/square/Square';
import { STATUS } from '~components/game_page/constants';

const getRandomValue = <T>(values: T[]) => {
  const min = 0;
  const max = values.length;

  return values[Math.floor(Math.random() * (max - min)) + min]; //Максимум не включается, минимум включается
};

const getRandomStatus = () => {
  return getRandomValue([STATUS.IS_DEAD, STATUS.IS_DEAD, STATUS.IS_LIFE]);
};

export const initMatrix = (sizeX: number, sizeY: number, squareSize: number, gridStroke: number, random?: boolean) => {
  const newMatrix: Square[][] = [];

  for(let x = 0; x < sizeX; x += 1) {
    newMatrix.push([]);
    for(let y = 0; y < sizeY; y += 1) {
      const status = random ? getRandomStatus() : undefined;

      newMatrix[x][y] = new Square({
        gridStroke,
        matrix: newMatrix,
        x,
        y,
        coords: [
          squareSize * x,
          squareSize * y,
          squareSize,
          squareSize,
        ],
        status,
      });
    }
  }

  return newMatrix;
};

export const getSquareBrothers = (matrix: Square[][], row: number, col: number) => {
  const min_i = Math.max(0, row - 1);
  const max_i = Math.min(matrix.length - 1, row + 1);
  const min_j = Math.max(0, col - 1);
  const max_j = Math.min(matrix[0].length - 1, col + 1);

  const brothers: Square[] = [];

  for(let i = min_i; i <= max_i; i += 1) {
    for(let j = min_j; j <= max_j; j += 1) {
      if (!(i === row && j === col)) {
        brothers.push(matrix[i][j]);
      }
    }
  }

  return brothers;
};

export const checkOnAliveStatus = (check_square: Square, brothers: Square[]) => {
  const count_of_alife = brothers.filter((square) => square.status === STATUS.IS_LIFE).length;

  if (check_square.status === STATUS.IS_DEAD) {
    if (count_of_alife === 3) {
      return STATUS.IS_LIFE;
    }
  }
  if (check_square.status === STATUS.IS_LIFE) {
    if (count_of_alife === 3 || count_of_alife === 2) {
      return STATUS.IS_LIFE;
    }
  }

  return STATUS.IS_DEAD;
};

export const checkMatrixOnAliveStatus = (matrix: Square[][]) => {
  const changed_sqaures: Square[] = [];

  for(let i = 0, length_i = matrix.length; i < length_i; i += 1) {
    for(let j = 0, length_j = matrix[i].length; j < length_j; j += 1) {
      const newStatus = checkOnAliveStatus(matrix[i][j], getSquareBrothers(matrix, i, j));

      if (newStatus !== matrix[i][j].status) {
        changed_sqaures.push(matrix[i][j]);
      }
    }
  }

  for(let i = 0, length = changed_sqaures.length; i< length; i += 1) {
    changed_sqaures[i].toggleLifeStatus();
  }

  return !!changed_sqaures.length;
};
