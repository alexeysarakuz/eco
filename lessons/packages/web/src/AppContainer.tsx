import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Frontload } from 'react-frontload';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import configureStore from './store/configureStore';

const { history, persistor, store } = configureStore();

const AppContainer = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <Frontload noServerRender={true}>
          <App />
        </Frontload>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default AppContainer;
