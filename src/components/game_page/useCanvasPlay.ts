import isNull from 'lodash/isNull';
import * as React from 'react';

import { FRAME_TIME_MS } from './constants';
import Grid from './matrix/Grid';

type UseCanvasPlayParams = {
  canvas: HTMLCanvasElement | null;
  grid: Grid | null;
}

const useCanvasPlay = ({ canvas, grid }: UseCanvasPlayParams) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  
  React.useEffect(
    () => {
      const ctx = canvas?.getContext('2d');
      if (!isPlaying || !ctx || !grid || !canvas) {
        return;
      }
      
      let prevTime = performance.now();
      let animationId: number | null = null;

      const draw = (now: number) => {
        animationId = requestAnimationFrame(draw);

        if (now - prevTime > FRAME_TIME_MS) {
          prevTime = now;

          const hasChanges = grid.checkOnAlive();

          if (!hasChanges) {
            cancelAnimationFrame(animationId);
            setIsPlaying(false);

            return;
          }

          grid.render();

          return;
        }
      };
      animationId = requestAnimationFrame(draw);

      return () => {
        if (!isNull(animationId)) {
          cancelAnimationFrame(animationId);
        }
      };
    },
    [
      isPlaying,
      grid,
    ],
  );

  return [isPlaying, setIsPlaying] as const;
};

export default useCanvasPlay;
