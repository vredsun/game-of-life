import palette from '~styles/themes/palette';
import { IStyledComponentsTheme } from '~styles/themes/types';

const colors: IStyledComponentsTheme = {
  colors: {
    ...palette,
    left_menu: palette.color_secondary_primary_90,
    left_menu_item: palette.white,
    card: palette.white,
    route_place: palette.color_secondary_shadow,
    route_place_title: palette.white,
  },
};

export default colors;
