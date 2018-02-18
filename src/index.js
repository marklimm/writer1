import React from 'react';
import ReactDOM from 'react-dom';

//  redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'
import promise from 'redux-promise'
import reduxLogger from 'redux-logger'

import reducers from './reducers';
//import { AUTH_USER } from './actions/types'

import { defineCustomFunctions } from './util/js-overrides'

//  routing is defined in MasterPage with react-router-dom v4
import MasterPage from './pages/master-page'


//import App from './App';

import registerServiceWorker from './registerServiceWorker';



const createStoreWithMiddleware = applyMiddleware(reduxThunk, promise, reduxLogger)(createStore);
const store = createStoreWithMiddleware(reducers);

//    store.dispatch({ type: AUTH_USER })

//stuff.defineCustomFunctions()
defineCustomFunctions()


//        <Router history={browserHistory} routes={routes} />
ReactDOM.render(
    <Provider store={store}>

        <MasterPage />
    </Provider>
    , document.querySelector('#root'));

//ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
