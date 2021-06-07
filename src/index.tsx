import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { Global } from '@emotion/react';
import { sanitize } from 'emotion-sanitize';
import { composeWithDevTools } from 'redux-devtools-extension';
import { customStyles } from './css/customStyles';
import { rootReducer, rootSaga } from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = { key: 'root', storage };

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Global styles={[sanitize, customStyles]} />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
