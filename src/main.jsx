import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {configureStore} from 'redux'
import {Provider} from 'react-redux'

const usersStore = configureStore({usersReducer,user:{}})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={usersStore}>
    <App />
  </Provider>
)
