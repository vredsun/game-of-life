import * as React from 'react';
import { ThemeProvider } from '~styles';
import themes from '~styles/themes';

type Props = {};

const ApmThemeProvider: React.FC<Props> = React.memo(
  (props) => {
    return (
      <ThemeProvider
        theme={themes.light}
        children={props.children}
      />
    );
  }
);

export default ApmThemeProvider;
