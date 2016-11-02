import * as types from '../actions/actionTypes';

const initialState = {
    serverUrl: 0
};

export default function counter(state = initialState, action = {}) {
    switch (action.type) {
        case types.UPDATE_URL_STATE:
            return {
                ...state,
                serverUrl: action.value
            };
        case types.SET_URL:
            //TODO set url on device storage
            return {
                ...state,
            };
        default:
            return state;
    }
}