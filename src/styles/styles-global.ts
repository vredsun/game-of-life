import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      color: ${({ theme }) => theme.colors.black};
      background-color: #EEEEEE;
    }

    ::-webkit-scrollbar-track-piece {
      background: ${({ theme }) => theme.colors.bg_and_disabled_buttons};
    }
    ::-webkit-scrollbar-corner {
      background: ${({ theme }) => theme.colors.bg_and_disabled_buttons};
    }
        /* width */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.bg_and_disabled_buttons};
      border-radius: 5px 5px 5px 5px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.color_secondary_primary};
      border-radius: 5px 5px 5px 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme }) => theme.colors.color_secondary_primary_80};
    }

    div.ant-notification {
      z-index: 1000000000;
    }
  `};
`;

export default GlobalStyle;
