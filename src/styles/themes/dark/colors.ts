import { DefaultTheme } from 'styled-components';
import palette from '../../themes/palette';

const colors: Pick<DefaultTheme, 'colors'> = {
  colors: {
    ...palette,
    left_menu: palette.color_secondary_primary_90,
    left_menu_item: palette.white,
    card: palette.white,
    route_place: palette.color_secondary_shadow,
    route_place_title: palette.white,

    cellColors: {
      red: 'red',
      yellow: 'red',
      black: 'red',
    },
  },
};

export default colors;
