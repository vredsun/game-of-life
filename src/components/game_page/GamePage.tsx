import * as React from 'react';

import Canvas from '~ui/atoms/canvas/Canvas';
import ColorPickerContainer from '~ui/organisms/color_picker_container/ColorPickerContainer';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from './constants';
import { CellColorName } from './matrix/cell/types';
import { getClearAction, getInitGridAction, getRandomFillAction, getSetCanvasAction } from './worker/actions/make-action';

import ButtonsControlContainer from '~ui/organisms/buttons_control_container/ButtonsControlContainer';
import useCanvasPauseInteractive from './useCanvasPauseInteractive';
import useCanvasPlay from './useCanvasPlay';
import { worker } from './worker/game';

const ContainerStyle: React.CSSProperties = {
  paddingTop: '50px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const GamePage: React.FC = React.memo(
  () => {
    const ref = React.useRef<HTMLCanvasElement>(null);
    const [isReady, setIsReady] = React.useState(false);
    const [activeColor, setActiveColor] = React.useState<CellColorName>('red');

    React.useEffect(
      () => {
        const canvas = ref.current;

        if (!canvas) {
          return;
        }

        const offscreen = canvas.transferControlToOffscreen();
        worker.postMessage(getSetCanvasAction(offscreen), [offscreen]);
        worker.postMessage(getInitGridAction(activeColor));

        setIsReady(true);
      },
      [],
    )

    const [isPlaying, setIsPlaying] = useCanvasPlay(isReady);

    useCanvasPauseInteractive({
      canvas: ref.current,
      activeColor,
      isPlaying,
      isReady,
    });

    return (
      <div style={ContainerStyle}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div></div>
          <Canvas
            ref={ref}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
          />
          <ColorPickerContainer
            activeColor={activeColor}
            handlePickColor={setActiveColor}
          />
        </div>
        <ButtonsControlContainer
          handleTrashClick={() => {
            setIsPlaying(false)
            worker.postMessage(getClearAction());
          }}
          handleSyncClick={() => {
            setIsPlaying(false);
            worker.postMessage(getRandomFillAction(activeColor));
          }}
          handlePlayClick={() => setIsPlaying((oldState) => !oldState)}
          isPlaying={isPlaying}
        />
      </div>
    );
  },
);

export default GamePage;

