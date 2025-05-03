import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import themes from './themes';

type Props = React.PropsWithChildren;

const AppThemeProvider: React.FC<Props> = React.memo(
  (props) => {
    return (
      <ThemeProvider
        theme={themes.light}
        children={props.children}
      />
    );
  }
);

export default AppThemeProvider;
