// Main Reducer
import { combineReducers } from 'redux';
import {routerReducer as routing} from 'react-router-redux'

import { example } from './modules/example'
import { user } from './modules/user'

const rootReducer = combineReducers({
    routing,
    example,
    user,
})

export default rootReducer