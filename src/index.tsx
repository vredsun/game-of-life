import * as React from 'react';
import * as ReactDOM  from 'react-dom';
import AppContainer from './AppContainer';

ReactDOM.render(
  <React.Suspense fallback={<div></div>}>
    <AppContainer/>
  </React.Suspense>,
  document.querySelector('#root'),
);
