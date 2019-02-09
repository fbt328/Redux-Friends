import axios from 'axios';

export const FRIENDS_GET = 'FRIENDS_GET' /*grabbing friend data */
export const FRIENDS_POST = 'FRIENDS_POST' /*creating new friend */
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS'
export const FRIENDS_FAIL = 'FRIENDS_FAIL'


// grabs friends from server
export const getFriends = () => dispatch => {
    dispatch ({type: FRIENDS_GET });
    axios
        .get(`url here`)
        .then(response =>
            dispatch({type: FRIENDS_SUCCESS, payload: response.data}))
        .catch(err => dispatch({type: FRIENDS_FAIL, payload: err}))
};

export const makeFriend = (friend) = dispatch => {
    dispatch ({type: FRIENDS_POST});
    axios
        .post(`url here`)
        .then(response =>
            dispatch({type: FRIENDS_SUCCESS, payload: response.data}))
        .catch(err => dispatch({type: FIRNED_FAIL, payload: err}))
};
