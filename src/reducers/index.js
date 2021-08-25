import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { productReducers } from './productsReducer'

export const Reducers = combineReducers({
    authReducer, productReducers
})