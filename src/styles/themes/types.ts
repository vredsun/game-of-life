import palette from '~styles/themes/palette';

export type IStyledComponentsTheme = {
  colors: typeof palette & {
    left_menu: string;
    left_menu_item: string;
    card: string;
    route_place: string;
    route_place_title: string;
  };
};
