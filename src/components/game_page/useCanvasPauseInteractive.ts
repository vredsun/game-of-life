import { isNil } from "lodash";
import React from "react";
import { GRID_CELL_SIZE } from "./constants";
import Grid from "./matrix/Grid";
import { CellColorName } from "./matrix/cell/types";

type Params = {
  activeColor: CellColorName;
  canvas: HTMLCanvasElement | null;
  grid: Grid | null;
  isPlaying: boolean;
};


const useCanvasPauseInteractive = ({ canvas, activeColor, grid, isPlaying }: Params) => {
  React.useEffect(
    () => {
      const ctx = canvas?.getContext('2d');

      if (isPlaying || !canvas || !ctx || !grid) {
        return;
      }

      const handleMouseMove = (event: MouseEvent) => {
        const { x, y } = event;
        const canvasBoundingClientRect = canvas.getBoundingClientRect();

        grid.hoverCell({
          activeColor,
          row: (x - canvasBoundingClientRect.x) / GRID_CELL_SIZE,
          column: (y - canvasBoundingClientRect.y) / GRID_CELL_SIZE,
        });
      }

      const handleMouseOut = () => {
        grid.resetHoveredCell();
      }

      const handleMouseDown = () => {
        grid.fixHoveredCellStatus(activeColor);
      }

      const handleMouseUp = () => {
        grid.resetHoveredCellStatus()
      }

      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseout', handleMouseOut);

      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);

      let animationId: number | null = null;

      const draw = () => {
        animationId = requestAnimationFrame(draw);

        grid.render();
      };

      requestAnimationFrame(draw);

      return () => {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseout', handleMouseOut);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);

        if (!isNil(animationId)) {
          cancelAnimationFrame(animationId);
        }
      };


    },
    [activeColor, grid, isPlaying],
  );
}

export default useCanvasPauseInteractive;
