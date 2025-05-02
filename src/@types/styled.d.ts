import 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      left_menu: string;
      left_menu_item: string;
      card: string;
      route_place: string;
      route_place_title: string;

      // ???
      white: string;
      black: string;
      color_grayscale_gray: string;
      color_secondary_primary: string;
      bg_and_disabled_buttons: string;
      color_secondary_primary_80: string;

      cellColors: {
        red: string;
        yellow: string;
        black: string;
      }
    };
  }
}