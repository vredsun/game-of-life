
import Square from '~components/game_page/square/Square';

export const resize = (canvas: HTMLCanvasElement) => {
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

export const getCanvasSize = (squareSize: number, size: number) => { 
  return squareSize * size;
};

export const drawBg = (ctx: CanvasRenderingContext2D) => {
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#EEEEEE';
  // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.beginPath();
  // drawGrid(ctx, sizeX, sizeY, squareSize, gridStroke);
};

export const drawMatrix = (cxt: CanvasRenderingContext2D, matrix: Square[][]) => {
  for(let i = 0, length_i = matrix.length; i < length_i; i += 1) {
    for(let j = 0, length_j = matrix[i].length; j < length_j; j += 1) {
      matrix[i][j].render(cxt);
    }
  }
};
