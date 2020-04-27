import * as React from 'react';
import { isNull } from 'util';

import Canvas from '~ui/atoms/canvas/Canvas';
import Square from '~components/game_page/square/Square';

type Props = {};

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

let last_hover: Square | null = null;
const checkOnHoverMatrix = (matrix: Square[][], x?: number, y?: number) => {
  if (last_hover?.checkOnHover(x, y)) {
    return true;
  } else {
    last_hover = null;
  }

  for(let i = 0, length_i = matrix.length; i < length_i; i += 1) {
    for(let j = 0, length_j = matrix[i].length; j < length_j; j += 1) {
      const isHover = matrix[i][j].checkOnHover(x, y);

      if (isHover) {
        last_hover = matrix[i][j];
        return isHover;
      }
    }
  }
};

const GamePage: React.FC<Props> = React.memo(
  (props) => {
    const ref = React.useRef<HTMLCanvasElement>();

    const [gridStroke] = React.useState(3);
    const [squareSize] = React.useState(40);
    const [sizeX] = React.useState(9);
    const [sizeY] = React.useState(9);

    const [matrix] = React.useState(() => initMatrix(sizeX, sizeY, squareSize, gridStroke));

    React.useEffect(
      () => {
        const canvas = ref.current;
        const ctx = canvas.getContext('2d');

        canvas.addEventListener('mousemove', (event) => {
          const { x, y } = event;

          const isHover = checkOnHoverMatrix(matrix, x, y);
          document.body.style.cursor = isHover ? 'pointer' : 'default';
        });
        canvas.addEventListener('mouseout', (event) => {
          const isHover = checkOnHoverMatrix(matrix, null, null);
          document.body.style.cursor = isHover ? 'pointer' : 'default';
        });

        let animationId: number | null = null;

        const draw = () => {
          resize(canvas);

          animationId = requestAnimationFrame(draw);

          drawBg(ctx);
          drawMatrix(ctx, matrix);

        };

        requestAnimationFrame(draw);

        return () => {
          if (!isNull(animationId)) {
            cancelAnimationFrame(animationId);
          }
        };
      },
      [
        sizeX,
        sizeY,
        squareSize,
        gridStroke,
      ],
    );

    return (
      <Canvas
        ref={ref}
        width={getCanvasSize(squareSize, gridStroke, sizeX)}
        height={getCanvasSize(squareSize, gridStroke, sizeY)}
      />
    );
  },
);

export default GamePage;

