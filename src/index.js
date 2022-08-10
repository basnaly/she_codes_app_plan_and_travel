import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppPlanTravel from './AppPlanTravel';
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/css/bootstrap.css";
import { applyMiddleware, compose } from "redux";
import { legacy_createStore as createStore} from 'redux';
import { Provider} from "react-redux";
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";
import AllReducers from './Reducers/AllRedicers';

const logger = createLogger({
});

const store = createStore(
  AllReducers,
  compose(
    applyMiddleware(logger, thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <AppPlanTravel />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();