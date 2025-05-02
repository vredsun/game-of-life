import { darken, lighten } from "polished";
import { DefaultTheme } from "styled-components";

export const DEAD_COLOR = '#F7F7F7';

export const CELL_COLORS: Record<keyof DefaultTheme['colors']['cellColors'], string> = {
  red: '#f92a2a',
  yellow: '#fed001',
  black: '#010101',
}


export const getDeadColor = (isHovered: boolean): string => {
  if (isHovered) {
    return darken(0.1, DEAD_COLOR);
  }

  return DEAD_COLOR;
}

export const getLifeColor = (isHovered: boolean, baseColorName: keyof DefaultTheme['colors']['cellColors']): string => {
  const color = CELL_COLORS[baseColorName];

  if (isHovered) {
    return lighten(0.1, color);
  }

  return color;
}