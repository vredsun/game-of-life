import * as React from 'react';

import Canvas from '~ui/atoms/canvas/Canvas';
import { getCanvasSize } from '~components/game_page/utils/draw';
import { initMatrix } from '~components/game_page/utils';
import H1LinkConway from '~ui/organisms/H1LinkConway/H1LinkConway';
import ButtonsControlContainer from '~ui/organisms/buttons_control_container/ButtonsControlContainer';
import useCanvasPauseInteractive from '~components/game_page/useCanvasPauseInteractive';
import useCanvasPlay from '~components/game_page/useCanvasPlay';

type Props = {};

const ContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const GamePage: React.FC<Props> = React.memo(
  (props) => {
    const ref = React.useRef<HTMLCanvasElement>();
    const [startStatus, changeStartStatus] = React.useState(false);

    const [gridStroke] = React.useState(0.5);
    const [squareSize] = React.useState(10);
    const [sizeX] = React.useState(90);
    const [sizeY] = React.useState(45);

    const [matrix, setMatrix] = React.useState(() => initMatrix(sizeX, sizeY, squareSize, gridStroke, true));

    useCanvasPauseInteractive(
      ref,
      startStatus ? 'play' : 'pause',
      matrix,
    );

    useCanvasPlay(
      ref,
      startStatus ? 'play' : 'pause',
      matrix,
      changeStartStatus,
    );

    return (
      <div style={ContainerStyle}>
        <H1LinkConway />
        <Canvas
          ref={ref}
          width={getCanvasSize(squareSize, sizeX)}
          height={getCanvasSize(squareSize, sizeY)}
        />
        <ButtonsControlContainer
          handleTrashClick={() => setMatrix(initMatrix(sizeX, sizeY, squareSize, gridStroke))}
          handleSyncClick={() => setMatrix(initMatrix(sizeX, sizeY, squareSize, gridStroke, true))}
          handlePlayClick={() => changeStartStatus((oldState) => !oldState)}
          status={startStatus ? 'play' : 'pause'}
        />
      </div>
    );
  },
);

export default GamePage;

