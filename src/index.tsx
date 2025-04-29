import * as React from 'react';
import { createRoot } from 'react-dom/client';
import AppContainer from './AppContainer';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <React.Suspense fallback={<div></div>}>
    <AppContainer/>
  </React.Suspense>,
);
