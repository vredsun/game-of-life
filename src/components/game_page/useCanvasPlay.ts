import * as React from 'react';

import { WorkerResultEnumTypes, WorkerResultEvents } from './worker/actions/event-types';
import { getPauseAction, getPlayAction } from './worker/actions/make-action';
import { worker } from './worker/game';

const useCanvasPlay = (isReady: boolean) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  
  React.useEffect(
    () => {
      if (!isPlaying || !isReady) {
        return;
      }

      const listener = (event: MessageEvent<WorkerResultEvents>) => {
        if (event.data.type === WorkerResultEnumTypes.FINISHED_ACTION) {
          setIsPlaying(false);
        }
      };

      worker.postMessage(getPlayAction());
      worker.addEventListener('message', listener)
      
      return (): void => {
        worker.postMessage(getPauseAction());
        worker.removeEventListener('message', listener)
      }
    },
    [
      isReady,
      isPlaying,
    ],
  );

  return [isPlaying, setIsPlaying] as const;
};

export default useCanvasPlay;
