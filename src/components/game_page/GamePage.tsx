import * as React from 'react';
import { isNull } from 'util';
import { IoIosTrash, IoMdPause, IoMdPlay } from 'react-icons/io';

import Canvas from '~ui/atoms/canvas/Canvas';
import { checkOnHoverMatrix, clickOnHoverSquare } from '~components/game_page/utils/event_handlers';
import { resize, drawMatrix, drawBg, getCanvasSize } from '~components/game_page/utils/draw';
import { checkMatrixOnAliveStatus, initMatrix } from '~components/game_page/utils';
import { STATUS } from '~components/game_page/constants';

type Props = {};

const ContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
const ButtonContainerStyle: React.CSSProperties = {
  marginTop: '0.5rem',
  fontSize: '2rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

const ButtonStyle: React.CSSProperties = {
  fontSize: '1rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer',
  margin: '0.5rem',
};

const GamePage: React.FC<Props> = React.memo(
  (props) => {
    const ref = React.useRef<HTMLCanvasElement>();
    const [startStatus, changeStartStatus] = React.useState(false);

    const [gridStroke] = React.useState(1);
    const [squareSize] = React.useState(15);
    const [sizeX] = React.useState(60);
    const [sizeY] = React.useState(30);

    const [matrix, setMatrix] = React.useState(() => initMatrix(sizeX, sizeY, squareSize, gridStroke));

    React.useEffect(
      () => {
        if (!startStatus) {
          const canvas = ref.current;
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
        startStatus,
        matrix,
      ],
    );

    React.useEffect(
      () => {
        if (startStatus) {
          let animationId: number = null;
          let step = 1;
          const startTime = performance.now();
          const canvas = ref.current;
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
      [startStatus],
    );

    return (
      <div style={ContainerStyle}>
        <h1>
          <a href="https://ru.wikipedia.org/wiki/%D0%98%D0%B3%D1%80%D0%B0_%C2%AB%D0%96%D0%B8%D0%B7%D0%BD%D1%8C%C2%BB">Игра «Жизнь»</a>
        </h1>
        <Canvas
          ref={ref}
          width={getCanvasSize(squareSize, sizeX)}
          height={getCanvasSize(squareSize, sizeY)}
        />
        <div style={ButtonContainerStyle}>
          <button disabled={startStatus} style={ButtonStyle} onClick={() => setMatrix(initMatrix(sizeX, sizeY, squareSize, gridStroke))}>
            <IoIosTrash />
          </button>
          <button style={ButtonStyle} onClick={() => changeStartStatus((oldState) => !oldState)}>
            {
              startStatus
                ? <IoMdPause />
                : <IoMdPlay />
            }
          </button>
        </div>
      </div>
    );
  },
);

export default GamePage;

