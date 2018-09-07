import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FormContainer from './modules/form/formContainer';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <FormContainer />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();