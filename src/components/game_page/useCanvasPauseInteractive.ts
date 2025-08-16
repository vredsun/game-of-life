import React from "react";
import { GRID_CELL_SIZE } from "./constants";
import { CellColorName } from "./matrix/cell/types";
import { getFixHoveredCellStatusAction, getHoverCellAction, getResetHoveredCellAction, getResetHoveredCellStatusAction } from "./worker/actions/make-action";
import { worker } from "./worker/game";

type Params = {
  activeColor: CellColorName;
  canvas: HTMLCanvasElement | null;
  isPlaying: boolean;
  isReady: boolean
};

const useCanvasPauseInteractive = ({ isReady, canvas, activeColor, isPlaying }: Params) => {
  React.useEffect(
    () => {
      if (isPlaying || !canvas || !isReady) {
        return;
      }

      const handleMouseMove = (event: MouseEvent) => {
        const { x, y } = event;
        const canvasBoundingClientRect = canvas.getBoundingClientRect();

        worker.postMessage(getHoverCellAction({
          activeColor,
          row: (x - canvasBoundingClientRect.x) / GRID_CELL_SIZE,
          column: (y - canvasBoundingClientRect.y) / GRID_CELL_SIZE,
        }))
      }

      const handleMouseOut = () => {
        worker.postMessage(getResetHoveredCellAction());
      }

      const handleMouseDown = () => {
        worker.postMessage(getFixHoveredCellStatusAction(activeColor));
      }

      const handleMouseUp = () => {
        worker.postMessage(getResetHoveredCellStatusAction());
      }

      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseout', handleMouseOut);

      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseout', handleMouseOut);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
      };


    },
    [isReady, activeColor, isPlaying],
  );
}

export default useCanvasPauseInteractive;
