import * as React from 'react';
import { createRoot } from 'react-dom/client';
import AppContainer from './AppContainer';

const domNode = document.getElementById('root');

if (domNode) {
  const root = createRoot(domNode);

  root.render(
    <AppContainer/>,
  );
}