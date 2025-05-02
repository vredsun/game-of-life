import { DefaultTheme } from 'styled-components';
import palette from '../../themes/palette';

const colors: Pick<DefaultTheme, 'colors'> = {
  colors: {
    ...palette,
    left_menu: palette.white,
    left_menu_item: palette.black,
    card: palette.white,
    route_place: palette.color_main_primary_10,
    route_place_title: palette.color_secondary_shadow,

    cellColors: {
      red: '#f92a2a',
      yellow: '#fed001',
      black: '#010101',
    },
  },
};

export default colors;
