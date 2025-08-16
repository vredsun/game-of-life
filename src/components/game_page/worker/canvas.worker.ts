import { FRAME_TIME_MS } from "../constants";
import Grid from "../matrix/Grid";
import { WorkerEnumTypes, WorkerEvents } from "./actions/event-types";
import { getFinishedPlayAction } from "./actions/make-action";

// @ts-expect-error i dont know how fix it
const ctx: Worker = self;

let canvas: OffscreenCanvas | null = null;
let grid: Grid | null = null;
let prevTime = performance.now();
let isPlaying = false;

ctx.addEventListener('message', (event: MessageEvent<WorkerEvents>) => {
  switch (event.data.type) {
    case WorkerEnumTypes.SET_CANVAS: {
      canvas = event.data.canvas;
      break;
    }
    case WorkerEnumTypes.INIT_GRID: {
      if (canvas) {
        const ctx = canvas.getContext('2d');

        if (ctx) {
          grid = new Grid(ctx, event.data.activeColor);

          prevTime = performance.now();
          
          const draw = (now: number) => {
            requestAnimationFrame(draw);

            if (isPlaying) {
              if (now - prevTime > FRAME_TIME_MS) {
                prevTime = now;
                
                if (grid) {
                  const hasChanges = grid.checkOnAlive();

                  if (!hasChanges) {
                    self.postMessage(getFinishedPlayAction())

                    return;
                  }
                }
              }
            }

            if (grid) {
              grid.render();
            }
          };
          requestAnimationFrame(draw);

        }
      }

      break;
    }
    case WorkerEnumTypes.PLAY: {
      isPlaying = true;
      break;
    }
    case WorkerEnumTypes.PAUSE: {
      isPlaying = false;
      break;
    }
    case WorkerEnumTypes.CLEAR: {
      if (grid) {
        isPlaying = false;
        grid.clear();
      }
      break;
    }
    case WorkerEnumTypes.RANDOM_FILL: {
      if (grid) {
        grid.randomFill(event.data.activeColor);
      }
      break;
    }
    case WorkerEnumTypes.RESET_HOVERED_CELL: {
      if (grid) {
        grid.resetHoveredCell();
      }

      break;
    }
      case WorkerEnumTypes.FIX_HOVERED_CELL_STATUS: {
      if (grid) {
        grid.fixHoveredCellStatus(event.data.activeColor);
      }

      break;
    }
    case WorkerEnumTypes.RESET_HOVERED_CELL_STATUS: {
      if (grid) {
        grid.resetHoveredCellStatus();
      }

      break;
    }
    case WorkerEnumTypes.HOVER_CELL: {
      if (grid) {
        grid.hoverCell(event.data.params);
      }

      break;
    }
  }
})