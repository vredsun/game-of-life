import * as React from 'react';
import { isNull } from 'util';

import Square from '~components/game_page/square/Square';
import { STATUS } from '~components/game_page/constants';
import { checkOnHoverMatrix, clickOnHoverSquare } from '~components/game_page/utils/event_handlers';
import { resize, drawBg, drawMatrix } from '~components/game_page/utils/draw';

const useCanvasPauseInteractive = (ref_canvas: React.MutableRefObject<HTMLCanvasElement>, play_status: 'play' | 'pause', matrix: Square[][]) => {
  React.useEffect(
    () => {
      if (play_status === 'pause') {
        const canvas = ref_canvas.current;
        const ctx = canvas.getContext('2d');
        let isMouseDown = false;
        let isNewStatusOnMouse: STATUS = null;

        const handleMouseMove = (event: MouseEvent) => {
          const { x, y } = event;
          const canvasBoundingClientRect = canvas.getBoundingClientRect();

          const isHoverSquare = checkOnHoverMatrix(matrix, x - canvasBoundingClientRect.x, y - canvasBoundingClientRect.y);
          document.body.style.cursor = isHoverSquare ? 'pointer' : 'default';

          if (isMouseDown) {
            clickOnHoverSquare(isNewStatusOnMouse);
          }

        };
        const handleMouseOut = (event: MouseEvent) => {
          checkOnHoverMatrix(matrix, null, null);
          handleMouseUp(event);
          document.body.style.cursor = 'default';
        };
        const handleMouseDown = (event: MouseEvent) => {
          const { x, y } = event;
          const canvasBoundingClientRect = canvas.getBoundingClientRect();

          const isHoverSquare = checkOnHoverMatrix(matrix, x - canvasBoundingClientRect.x, y - canvasBoundingClientRect.y);

          isMouseDown = true;
          isNewStatusOnMouse = isHoverSquare.status;
        };
        const handleMouseUp = (event: MouseEvent) => {
          clickOnHoverSquare(isNewStatusOnMouse);

          isMouseDown = false;
          isNewStatusOnMouse = null;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseout', handleMouseOut);

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mouseup', handleMouseUp);

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
          canvas.removeEventListener('mousedown', handleMouseDown);
          canvas.removeEventListener('mouseup', handleMouseUp);

          if (!isNull(animationId)) {
            cancelAnimationFrame(animationId);
          }
        };
      }
    },
    [
      play_status === 'pause',
      matrix,
    ],
  );
};

export default useCanvasPauseInteractive;
