import * as React from 'react';
import Button, { ButtonProps } from '~ui/atoms/button/Button';
import { IoIosPause, IoIosPlay } from 'react-icons/io';

type Props = {
  status?: 'play' | 'pause';
} & ButtonProps;

const ButtonAction: React.FC<Props> = React.memo(
  ({ status, ...props }) => {

    return (
      <Button {...props}>
        {
          status === 'play'
            ? <IoIosPause />
            : <IoIosPlay />
        }
      </Button>
    );
  },
);

export default ButtonAction;
