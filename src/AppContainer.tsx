import * as React from 'react';
import AppThemeProvider from '~styles/AppThemeProvider';
import GlobalStyle from '~styles/styles-global';

const GamePage = React.lazy(() => (
  import('~components/game_page/GamePage')
));

const App: React.FC<React.PropsWithChildren> = () => {
  return (
    <React.Suspense fallback={null}>
      <AppThemeProvider>
        <GlobalStyle />
        <GamePage />
      </AppThemeProvider>
    </React.Suspense>
  );
};

export default App;

