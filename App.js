import React from 'react';
import { Provider } from 'react-redux';
import Store from './app/store'
import Main from './app/Main';

const App = () => {
  return (
      <Provider store={Store}>
          <Main />
      </Provider>
  );
};

export default App;
