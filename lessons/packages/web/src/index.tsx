import React from 'react';
import { hydrate, render } from 'react-dom';
import Loadable from 'react-loadable';

import AppContainer from './AppContainer';
import { unregister } from './serviceWorker';

// Unregister service worker
unregister();

const mountEl: any = document.getElementById('root');

if (mountEl.hasChildNodes() === true) {
  Loadable.preloadReady().then(() => {
    hydrate(<AppContainer />, mountEl);
  });
} else {
  render(<AppContainer />, mountEl);
}

if (module.hot) {
  module.hot.accept('./AppContainer', () => {
    render(<AppContainer />, mountEl);
  });
}
