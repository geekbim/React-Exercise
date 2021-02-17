import { ADD_FAVORITE_TERM, REMOVE_FAVORITE_TERM } from '../actions/types'

export default function favoriteReducer(state = [], action) {
    switch (action.type) {
        case ADD_FAVORITE_TERM:
            return [...state, action.payload]
            break;
        case REMOVE_FAVORITE_TERM:
            return state.filter(e => {
                if (e.name !== action.payload.name) {
                    return true
                }
                return false
            })
        default:
            return state
            break;
    }
}