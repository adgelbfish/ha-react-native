
import * as types from './actionTypes';

export function updateUrlState(url) {
    return {
        type: types.UPDATE_URL_STATE,
        value: url
    };
}

export function saveSettings() {
    return {
        type: types.SAVE_SETTINGS
    };
}

export function retrieveSettings() {
    return {
        type: types.RETRIEVE_SETTINGS
    };
}