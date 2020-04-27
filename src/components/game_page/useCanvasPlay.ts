import * as React from 'react';
import { isNull } from 'util';

import Square from '~components/game_page/square/Square';
import { resize, drawBg, drawMatrix } from '~components/game_page/utils/draw';
import { checkMatrixOnAliveStatus } from '~components/game_page/utils';

const useCanvasPlay = (ref_canvas: React.MutableRefObject<HTMLCanvasElement>, play_status: 'play' | 'pause', matrix: Square[][], changeStartStatus: (startStatus: boolean) => void) => {
  React.useEffect(
    () => {
      if (play_status === 'play') {
        let animationId: number = null;
        let step = 1;
        const startTime = performance.now();
        const canvas = ref_canvas.current;
        const ctx = canvas.getContext('2d');

        const draw = (now: number) => {
          animationId = requestAnimationFrame(draw);

          if (now > (startTime + step * 100)) {
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
    [
      play_status === 'play',
      matrix,
    ],
  );
};

export default useCanvasPlay;
