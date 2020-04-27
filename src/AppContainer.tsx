import * as React from 'react';
import { hot } from 'react-hot-loader/root';

const ApmThemeProvider = React.lazy(() => (
  import(/* webpackChunkName: "ApmThemeProvider" */ '~styles/ApmThemeProvider')
));

const RouterContainer = React.lazy(() => (
  import(/* webpackChunkName: "RouterContainer" */ '~components/RouterContainer')
));
const GlobalStyle = React.lazy(() => (
  import(/* webpackChunkName: "GlobalStyle" */ '~styles/styles-global')
));

const App: React.FC<{}> = () => {
  return (
    <React.Suspense fallback="Загрузка...">
      <ApmThemeProvider>
        <GlobalStyle />
        <RouterContainer />
      </ApmThemeProvider>
    </React.Suspense>
  );
};

export default hot(() => <App />);

