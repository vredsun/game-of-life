
import * as React from 'react';
import { CellColorName } from '~components/game_page/matrix/cell/types';
import ColorItem from '~ui/atoms/color_item/ColorItem';
import Flex from '~ui/atoms/flex/Flex';

type Props = {
  activeColor: CellColorName;
  handlePickColor: (color: CellColorName) => void;
};

export const COLORS: Array<CellColorName> = [
  'red',
  'yellow',
  'black'
]

const ColorPickerContainer: React.FC<Props> = React.memo(
  (props) => {
    return (
      <Flex>
        {
          COLORS.map(color => (
            <ColorItem
              key={color}
              color={color}
              isActive={color === props.activeColor}
              onClick={() => props.handlePickColor(color)}
            />
          ))
        }
      </Flex>
    );
  },
);

export default ColorPickerContainer;
