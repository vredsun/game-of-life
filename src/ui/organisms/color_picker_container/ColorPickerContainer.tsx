
import * as React from 'react';
import { DefaultTheme } from 'styled-components';
import ColorItem from '~ui/atoms/color_item/ColorItem';
import Flex from '~ui/atoms/flex/Flex';

type Props = {
  activeColor: keyof DefaultTheme['colors']['cellColors'];
  handlePickColor: (color: keyof DefaultTheme['colors']['cellColors']) => void;
};

export const COLORS: Array<keyof DefaultTheme['colors']['cellColors']> = [
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
