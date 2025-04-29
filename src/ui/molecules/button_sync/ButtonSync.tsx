import * as React from 'react';
import { IoIosSync } from 'react-icons/io';
import Button, { ButtonProps } from '~ui/atoms/button/Button';

type Props = {
} & ButtonProps;

const ButtonSync: React.FC<Props> = React.memo(
  (props) => {

    return (
      <Button {...props} aria-label="Рандомная генерация значений">
        <IoIosSync size={30} />
      </Button>
    );
  },
);

export default ButtonSync;
