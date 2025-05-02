import * as React from 'react';
import { DefaultTheme } from 'styled-components';

import useCanvasPauseInteractive from '~components/game_page/useCanvasPauseInteractive';
import useCanvasPlay from '~components/game_page/useCanvasPlay';
import { initMatrix } from '~components/game_page/utils';
import { getCanvasSize } from '~components/game_page/utils/draw';
import Canvas from '~ui/atoms/canvas/Canvas';
import H1LinkConway from '~ui/organisms/H1LinkConway/H1LinkConway';
import ButtonsControlContainer from '~ui/organisms/buttons_control_container/ButtonsControlContainer';
import ColorPickerContainer from '~ui/organisms/color_picker_container/ColorPickerContainer';

type Props = {};

const ContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const GamePage: React.FC<Props> = React.memo(
  () => {
    const ref = React.useRef<HTMLCanvasElement>(null);
    const [startStatus, changeStartStatus] = React.useState(false);
    const [activeColor, setActiveColor] = React.useState<keyof DefaultTheme['colors']['cellColors']>('yellow')

    const [gridStroke] = React.useState(0.5);
    const [squareSize] = React.useState(10);
    const [sizeX] = React.useState(90);
    const [sizeY] = React.useState(45);

    const [matrix, setMatrix] = React.useState(() => initMatrix(sizeX, sizeY, squareSize, gridStroke, true));

    useCanvasPauseInteractive(
      ref,
      activeColor,
      startStatus ? 'play' : 'pause',
      matrix,
    );

    useCanvasPlay(
      activeColor,
      ref,
      startStatus ? 'play' : 'pause',
      matrix,
      changeStartStatus,
    );

    return (
      <div style={ContainerStyle}>
        <H1LinkConway />
        <div style={{ display: 'flex', gap: '12px' }}>
          <Canvas
            ref={ref}
            width={getCanvasSize(squareSize, sizeX)}
            height={getCanvasSize(squareSize, sizeY)}
          />
          <ColorPickerContainer activeColor={activeColor} handlePickColor={setActiveColor} />
        </div>
        <ButtonsControlContainer
          handleTrashClick={() => {
            changeStartStatus(false)
            setMatrix(initMatrix(sizeX, sizeY, squareSize, gridStroke));
          }}
          handleSyncClick={() => {
            setMatrix(initMatrix(sizeX, sizeY, squareSize, gridStroke, true))
            changeStartStatus(false);
          }}
          handlePlayClick={() => changeStartStatus((oldState) => !oldState)}
          status={startStatus ? 'play' : 'pause'}
        />
      </div>
    );
  },
);

export default GamePage;

