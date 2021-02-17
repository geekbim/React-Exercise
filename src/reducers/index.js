import { combineReducers } from 'redux'
import termsReducer from './termsReducer'
import favoritesReducer from './favoriteReducer'

export default combineReducers({
    terms: termsReducer,
    favorites: favoritesReducer
})