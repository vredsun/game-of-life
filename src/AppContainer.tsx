import * as React from 'react';

const ApmThemeProvider = React.lazy(() => (
  import(/* webpackChunkName: "ApmThemeProvider" */ '~styles/ApmThemeProvider')
));

const RouterContainer = React.lazy(() => (
  import(/* webpackChunkName: "RouterContainer" */ '~components/RouterContainer')
));
const GlobalStyle = React.lazy(() => (
  import(/* webpackChunkName: "GlobalStyle" */ '~styles/styles-global')
));

const App: React.FC<React.PropsWithChildren> = () => {
  return (
    <React.Suspense fallback={null}>
      <ApmThemeProvider>
        <GlobalStyle />
        <RouterContainer />
      </ApmThemeProvider>
    </React.Suspense>
  );
};

export default App;

