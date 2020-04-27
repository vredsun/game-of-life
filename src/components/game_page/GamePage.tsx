import * as React from 'react';
import { isNull, isNumber } from 'util';

import Canvas from '~ui/atoms/canvas/Canvas';
import Square from '~components/game_page/square/Square';
import { STATUS } from '~components/game_page/constants';

type Props = {};

const ContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
const ButtonStyle: React.CSSProperties = {
  marginTop: '1rem',
};

const resize = (canvas: HTMLCanvasElement) => {
  // Lookup the size the browser is displaying the canvas.
  var displayWidth  = canvas.clientWidth;
  var displayHeight = canvas.clientHeight;

  // Check if the canvas is not the same size.
  if (canvas.width !== displayWidth
      || canvas.height !== displayHeight) {

    // Make the canvas the same size
    canvas.width  = displayWidth;
    canvas.height = displayHeight;
  }
};

const getCanvasSize = (squareSize: number, gridStroke: number, size: number) => { 
  return squareSize * size + gridStroke * (size + 1);
};

const drawBg = (ctx: CanvasRenderingContext2D) => {
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#EEEEEE';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.beginPath();
  // drawGrid(ctx, sizeX, sizeY, squareSize, gridStroke);
};

const initMatrix = (sizeX: number, sizeY: number, squareSize: number, gridStroke: number) => {
  const newMatrix: Square[][] = [];

  for(let x = 0; x < sizeX; x += 1) {
    newMatrix.push([]);
    for(let y = 0; y < sizeY; y += 1) {
      newMatrix[x][y] = new Square({
        matrix: newMatrix,
        x,
        y,
        coords: [
          gridStroke + (gridStroke + squareSize) * x,
          gridStroke + (gridStroke + squareSize) * y,
          squareSize,
          squareSize,
        ],
      });
    }
  }

  return newMatrix;
};

const drawMatrix = (cxt: CanvasRenderingContext2D, matrix: Square[][]) => {
  for(let i = 0, length_i = matrix.length; i < length_i; i += 1) {
    for(let j = 0, length_j = matrix[i].length; j < length_j; j += 1) {
      matrix[i][j].render(cxt);
    }
  }
};

const checkOnAliveStatus = (check_square: Square, brothers: Square[]) => {
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

const getSquareBrothers = (matrix: Square[][], row: number, col: number) => {
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

const checkMatrixOnAliveStatus = (matrix: Square[][]) => {
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

let last_hover: Square | null = null;
const checkOnHoverMatrix = (matrix: Square[][], x?: number, y?: number) => {
  if (last_hover?.checkOnHover(x, y)) {
    return true;
  } else {
    last_hover = null;
  }

  if (isNumber(x) && isNumber(y)) {
    for(let i = 0, length_i = matrix.length; i < length_i; i += 1) {
      for(let j = 0, length_j = matrix[i].length; j < length_j; j += 1) {
        const isHover = matrix[i][j].checkOnHover(x, y);

        if (isHover) {
          last_hover?.checkOnHover(null, null);
          last_hover = matrix[i][j];
          return isHover;
        }
      }
    }
  }
};
const clickOnHoverSquare = () => {
  last_hover?.toggleLifeStatus();
};

const GamePage: React.FC<Props> = React.memo(
  (props) => {
    const ref = React.useRef<HTMLCanvasElement>();
    const [startStatus, changeStartStatus] = React.useState(false);

    const [gridStroke] = React.useState(3);
    const [squareSize] = React.useState(20);
    const [sizeX] = React.useState(21);
    const [sizeY] = React.useState(21);

    const [matrix] = React.useState(() => initMatrix(sizeX, sizeY, squareSize, gridStroke));

    React.useEffect(
      () => {
        if (!startStatus) {
          const canvas = ref.current;
          const ctx = canvas.getContext('2d');

          const handleMouseMove = (event: MouseEvent) => {
            const { x, y } = event;
            const canvasBoundingClientRect = canvas.getBoundingClientRect();

            const isHover = checkOnHoverMatrix(matrix, x - canvasBoundingClientRect.x, y - canvasBoundingClientRect.y);
            document.body.style.cursor = isHover ? 'pointer' : 'default';
          };
          const handleMouseOut = (event: MouseEvent) => {
            checkOnHoverMatrix(matrix, null, null);
            document.body.style.cursor = 'default';
          };
          const handleClick = (event: MouseEvent) => {
            clickOnHoverSquare();
          };

          canvas.addEventListener('mousemove', handleMouseMove);
          canvas.addEventListener('mouseout', handleMouseOut);
          canvas.addEventListener('click', handleClick);

          let animationId: number | null = null;

          const draw = () => {
            animationId = requestAnimationFrame(draw);
            resize(canvas);

            drawBg(ctx);
            drawMatrix(ctx, matrix);

          };

          requestAnimationFrame(draw);

          return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseout', handleMouseOut);
            canvas.removeEventListener('click', handleClick);

            if (!isNull(animationId)) {
              cancelAnimationFrame(animationId);
            }
          };
        }
      },
      [
        startStatus,
      ],
    );

    React.useEffect(
      () => {
        if (startStatus) {
          let animationId: number = null;
          let step = 1;
          const startTime = performance.now();
          const canvas = ref.current;
          const ctx = canvas.getContext('2d');

          const draw = (now: number) => {
            animationId = requestAnimationFrame(draw);

            if (now > (startTime + step * 500)) {
              step += 1;
              const hasChanges = checkMatrixOnAliveStatus(matrix);
              if (hasChanges) {
                resize(canvas);

                drawBg(ctx);
                drawMatrix(ctx, matrix);
              } else {
                changeStartStatus(false);
              }
            }
          };

          requestAnimationFrame(draw);

          return () => {
            if (!isNull(animationId)) {
              cancelAnimationFrame(animationId);
            }
          };
        }
      },
      [startStatus],
    );

    return (
      <div style={ContainerStyle}>
        <Canvas
          ref={ref}
          width={getCanvasSize(squareSize, gridStroke, sizeX)}
          height={getCanvasSize(squareSize, gridStroke, sizeY)}
        />
        <div>
          <button style={ButtonStyle} onClick={() => changeStartStatus((oldState) => !oldState)}>
            {
              startStatus
                ? 'Pause'
                : 'Start'
            }
          </button>
        </div>
      </div>
    );
  },
);

export default GamePage;

