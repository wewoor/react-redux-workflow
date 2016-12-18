import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

// Main Resources
import './assets/css/comm.css'
import routers from './routers'

// Redux
import { store, history } from './store'

ReactDOM.render(
    <Provider store={store} history={history}>
        <Router history={browserHistory} routes={routers}/>
    </Provider>,
    document.getElementById('root')
);
