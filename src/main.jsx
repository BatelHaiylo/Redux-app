import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import usersReducer from './store/readucers/userReducer';
import rootReaducer from './store/readucers/index'
const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
 window.__REDUX_DEVTOOLS_EXTENSION__(),
)
// const usersStore = createStore(usersReducer,{users:[{_id:0,fName:"Batel",lName:"Haiylo",email:"someone@gmail.com",password:"vv22"}]},enhancers)
const usersStore = createStore(rootReaducer,{},enhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={usersStore}>
    <App />
  </Provider>
)
