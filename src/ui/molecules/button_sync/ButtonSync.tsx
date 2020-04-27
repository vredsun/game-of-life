import * as React from 'react';
import Button, { ButtonProps } from '~ui/atoms/button/Button';
import { IoIosSync } from 'react-icons/io';

type Props = {
} & ButtonProps;

const ButtonSync: React.FC<Props> = React.memo(
  (props) => {

    return (
      <Button {...props}>
        <IoIosSync />
      </Button>
    );
  },
);

export default ButtonSync;
