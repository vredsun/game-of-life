import palette from '~styles/themes/palette';
import { IStyledComponentsTheme } from '~styles/themes/types';

const colors: IStyledComponentsTheme = {
  colors: {
    ...palette,
    left_menu: palette.white,
    left_menu_item: palette.black,
    card: palette.white,
    route_place: palette.color_main_primary_10,
    route_place_title: palette.color_secondary_shadow,
  },
};

export default colors;
