
import styled, { css } from 'styled-components';
import { CellColorName } from '~components/game_page/matrix/cell/types';

type Props = {
  isActive: boolean;
  color: CellColorName;
};

const ColorItem = styled.div<Props>`
  width: 20px;
  height: 20px;
  border-radius: 12px;
  background-color: ${({ color, theme }) => theme.colors.cellColors[color]};
  transition: transform 300ms;
  cursor: pointer;
  border: 1px solid black;

  &:hover {
    transform: scale(1.2);
    opacity: 0.9;
  }

  ${({ isActive }) => isActive && css`transform: scale(1.4);`}
`;

export default ColorItem;
