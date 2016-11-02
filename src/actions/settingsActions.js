
import * as types from './actionTypes';

export function updateUrlState(url) {
    return {
        type: types.UPDATE_URL_STATE,
        value: url
    };
}

export function setUrl() {
    return {
        type: types.SET_URL
    };
}