import * as React from 'react';
import { IoIosPause, IoIosPlay } from 'react-icons/io';
import Button, { ButtonProps } from '~ui/atoms/button/Button';

type Props = {
  status?: 'play' | 'pause';
} & ButtonProps;

const ButtonAction: React.FC<Props> = React.memo(
  ({ status, ...props }) => {

    return (
      <Button {...props} aria-label="Старт/ Пауза">
        {
          status === 'play'
            ? <IoIosPause size={30} />
            : <IoIosPlay size={30} />
        }
      </Button>
    );
  },
);

export default ButtonAction;
