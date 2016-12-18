import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'

let configureStore;
const isProduction = false;

if (isProduction) {
    configureStore = require('./config.prod');
} else {
    configureStore = require('./config.dev');
}

const store = configureStore.default();
const history = syncHistoryWithStore(browserHistory, store);

export {
    store,
    history
}