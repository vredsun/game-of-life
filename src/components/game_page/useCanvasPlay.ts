import isNull from 'lodash/isNull';
import * as React from 'react';
import { DefaultTheme } from 'styled-components';

import Square from '~components/game_page/square/Square';
import { checkMatrixOnAliveStatus } from '~components/game_page/utils';
import { drawBg, drawMatrix, resize } from '~components/game_page/utils/draw';

const useCanvasPlay = (activeColor: keyof DefaultTheme['colors']['cellColors'], ref_canvas: React.MutableRefObject<HTMLCanvasElement>, play_status: 'play' | 'pause', matrix: Square[][], changeStartStatus: (startStatus: boolean) => void) => {
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
            const hasChanges = checkMatrixOnAliveStatus(activeColor, matrix);
            if (hasChanges) {
              resize(canvas);

              drawBg(ctx);
              drawMatrix(ctx, matrix);
            } else {
              changeStartStatus(false);
            }
          }
        };
        animationId = requestAnimationFrame(draw);

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
