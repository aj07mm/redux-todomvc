import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//export const createAsyncStore = compose(
//    applyMiddleware(thunkMiddleware),
//    window.devToolsExtension ? window.devToolsExtension() : f => f
//)(createStore);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
