// configureStore dev
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import DevTools from '../containers/DevTools'
import rootReducer from './reducers'

export default function configureStore(initialState) {
    
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunkMiddleware, createLogger()),
            DevTools.instrument()
        )
    )
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        })
    }

    return store;
}