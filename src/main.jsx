import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import useReducer from './store/readucers/userReducer';
const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
 window.__REDUX_DEVTOOLS_EXTENSION__(),
)
const usersStore = createStore(useReducer,{users:[]},enhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={usersStore}>
    <App />
  </Provider>
)
