import * as types from '../actions/actionTypes';

const initialState = {
    serverUrl: "",
    password: ""
};

export default function settings(state = initialState, action = {}) {
    switch (action.type) {
        case types.UPDATE_URL_STATE:
            return {
                ...state,
                serverUrl: action.value
            };
        case types.UPDATE_PASSWORD_STATE:
            return {
                ...state,
                password: action.value
            };
        case types.SAVE_SETTINGS:
            //TODO save all settings on device storage
            return {
                ...state,
            };
        case types.RETRIEVE_SETTINGS:
            //TODO retrieve all settings from device storage
            return {
                ...state
            };
        default:
            return state;
    }
}