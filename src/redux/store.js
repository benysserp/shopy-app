import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import cartReducer from './reducers/cartReducer'

const rootReducer = combineReducers({
    cartReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))