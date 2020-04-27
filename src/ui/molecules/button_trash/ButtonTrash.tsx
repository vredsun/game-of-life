import * as React from 'react';
import Button, { ButtonProps } from '~ui/atoms/button/Button';
import { IoIosTrash } from 'react-icons/io';

type Props = {
} & ButtonProps;

const ButtonTrash: React.FC<Props> = React.memo(
  (props) => {
    return (
      <Button {...props}>
        <IoIosTrash />
      </Button>
    );
  },
);

export default ButtonTrash;
