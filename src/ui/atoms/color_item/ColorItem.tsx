
import styled, { css, DefaultTheme } from 'styled-components';

type Props = {
  isActive: boolean;
  color: keyof DefaultTheme['colors']['cellColors'];
};

const ColorItem = styled.div<Props>`
  width: 20px;
  height: 20px;
  border-radius: 12px;
  background-color: ${({ color, theme }) => theme.colors.cellColors[color]};
  transition: transform 300ms;
  cursor: pointer;
  border: 2px solid black;

  &:hover {
    transform: scale(1.1);
    opacity: 0.9;
  }

  ${({ isActive }) => isActive && css`transform: scale(1.1);`}
`;

export default ColorItem;
