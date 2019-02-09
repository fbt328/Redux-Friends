// action imports here
import { FRIENDS_GET } from '../actions' /*grabbing friend data */
import { FRIENDS_POST } from '../actions' /*creating new friend */
import { FRIENDS_SUCCESS } from '../actions'
import { FRIENDS_FAIL } from '../actions' /*error message */

const initialState = {
    friends: [],
    fetchingFriends: false,
    creatingFriends: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FRIENDS_GET:
            return {...state, fetchingFriends: true};
        case FRIENDS_POST:
            return {...state, creatingFriends: true};
        case FRIENDS_SUCCESS:
            return {...state, fetchingFriends: false, friends:[...state.friends, ...action.payload]};    
        case FRIENDS_FAIL:
            return {...state, error:action.payload};
        default:
            return state; 
    }
}

export default reducer


// example initialState from project info
// const initialState = {
//     fetchingFriends: false,
//     friendsFetched: false,
//     friendsSaved: false,
//     savingFriends: false,
//     updatingFriend: false,
//     friendUpdated: false,
//     deletingFriend: false,
//     friendDeleted: false,
//     friends: [],
//     error: null
// }
// Each friend item that is in the friends array should have the following format:
// {
//   name: 'Luis',
//   age: 24,
//   email: 'luis@lambdaschool.com',
// }