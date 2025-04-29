import * as React from 'react';
import { IoIosTrash } from 'react-icons/io';
import Button, { ButtonProps } from '~ui/atoms/button/Button';

type Props = {
} & ButtonProps;

const ButtonTrash: React.FC<Props> = React.memo(
  (props) => {
    return (
      <Button {...props} aria-label="Очистить поле">
        <IoIosTrash size={30} />
      </Button>
    );
  },
);

export default ButtonTrash;
