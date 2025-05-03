import * as React from 'react';

import { isNil } from 'lodash';
import useCanvasPauseInteractive from '~components/game_page/useCanvasPauseInteractive';
import useCanvasPlay from '~components/game_page/useCanvasPlay';
import Canvas from '~ui/atoms/canvas/Canvas';
import ButtonsControlContainer from '~ui/organisms/buttons_control_container/ButtonsControlContainer';
import ColorPickerContainer from '~ui/organisms/color_picker_container/ColorPickerContainer';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from './constants';
import { CellColorName } from './matrix/cell/types';
import Grid from './matrix/Grid';
import { resize } from './utils/draw';

const ContainerStyle: React.CSSProperties = {
  paddingTop: '50px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const GamePage: React.FC = React.memo(
  () => {
    const ref = React.useRef<HTMLCanvasElement>(null);
    const [activeColor, setActiveColor] = React.useState<CellColorName>('yellow');

    const [grid, setGrid] = React.useState<Grid | null>(null);

    React.useEffect(
      () => {
        const ctx = ref.current?.getContext('2d');

        if (!ctx) {
          return;
        }

        const grid = new Grid(ctx, activeColor);

        grid.render();

        setGrid(grid);
      },
      [],
    )

    const [isPlaying, setIsPlaying] = useCanvasPlay({
      canvas: ref.current,
      grid,
    });

    useCanvasPauseInteractive({
      canvas: ref.current,
      activeColor,
      isPlaying,
      grid,
    });

    React.useEffect(
      () => {
        const canvas = ref.current;
        const ctx = ref.current?.getContext('2d');

        if (!canvas || !ctx) {
          return;
        }

        let animationId: number | null = null;
  
        const draw = () => {
          animationId = requestAnimationFrame(draw);
          resize(canvas);
        };
  
        requestAnimationFrame(draw);

        return () => {
          if (!isNil(animationId)) {
            cancelAnimationFrame(animationId);
          }
        }
      },
      [],
    );


    return (
      <div style={ContainerStyle}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div></div>
          <Canvas
            ref={ref}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
          />
          <ColorPickerContainer activeColor={activeColor} handlePickColor={setActiveColor} />
        </div>
        <ButtonsControlContainer
          handleTrashClick={() => {
            setIsPlaying(false)
            grid?.clear();
          }}
          handleSyncClick={() => {
            setIsPlaying(false);
            grid?.randomFill(activeColor);
          }}
          handlePlayClick={() => setIsPlaying((oldState) => !oldState)}
          isPlaying={isPlaying}
        />
      </div>
    );
  },
);

export default GamePage;

