import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, combineReduxers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'
import thunkMiddleware from 'redux-thunk';


// ADDING REDUX-TUNK AS MIDDLEWARE
//const createAsyncStore = compose(
//    applyMiddleware(thunkMiddleware),
//    window.devToolsExtension ? window.devToolsExtension() : f => f
//)(createStore); // 1st param middleware, 2nd param extension

// STORE INITIAL STATE
//const ajaxInitialState = {
//    rowData: [],
//    isLoading: true,
//    num_pages: 1,
//    count: 0,
//    queryOpts: {
//        filters: null,
//        searchTerm: '', // Should be an empty string for text input.
//        sortKey: null,
//        page: 1,
//        pageSize: 50,
//    },
//    newRows: [],
//    deletedRows: [],
//};

// REDUCER
//const function ajaxReducer(state = ajaxInitialState, action) {
//    switch (action.type) {
//        case SHOW_LOADING:
//            return {
//                ...state,
//                isLoading: true
//            };
//        case LOAD_DATA:
//            return {
//                ...state,
//                isLoading: false,
//                rowData: action.data.results,
//                num_pages: action.data.num_pages,
//                count: action.data.count
//            };

// REDUX STORE GENERATOR
//const configureStore = (initialState) => (
//    createAsyncStore( // createStore is inside
//        combineReducers({ //return combine reducers
//            ajaxReducer: ajaxReducer,
//            modal: modalReducer,
//            radio: radioButtonsReducer
//        }),
//        {
//            ajaxReducer: initialState,
//            modal: modalInitialState,
//            radio: radioButtonsReducer
//        }
//    )
//)

//const store = configureStore(ajaxInitialState);

// the same as createAsyncStore but without thunk middleware
//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(reducer, compose(
        applyMiddleware(thunkMiddleware), // enhancer
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // DevTools
    )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
