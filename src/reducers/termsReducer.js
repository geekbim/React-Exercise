import { ADD_FETCHED_DATA } from '../actions/types'

export default function termReducer(state = [], action) {
    switch (action.type) {
        case ADD_FETCHED_DATA:
            return [...action.payload]
            break;
        default:
            return state
            break;
    }
}