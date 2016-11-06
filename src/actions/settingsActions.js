import * as types from './actionTypes';

import {
    SAVE_STATUS_ATTEMPTING,
    SAVE_STATUS_SUCCESSFUL,
    SAVE_STATUS_ERROR,
    SETTINGS_STORAGE_PREFIX,
    SETTINGS_STORAGE_SERVER_URL_NAME,
    LOAD_STATUS_ATTEMPTING,
    LOAD_STATUS_SUCCESS
} from '../util/constants'

import Keychain from 'react-native-keychain'
import store from 'react-native-simple-store'

export function updateUrlState(url) {
    return {
        type: types.UPDATE_URL_STATE,
        value: url
    };
}

export function updatePasswordState(password) {
    return {
        type: types.UPDATE_PASSWORD_STATE,
        value: password
    };
}

export function storeSettings(settingsObject) {
    return function (dispatch) {
        dispatch(saveSettings(SAVE_STATUS_ATTEMPTING));

        return Promise.all(
            [
                settingsObject.password ? dispatch(storePassword(settingsObject.password)) : () => {
                },
                settingsObject.serverUrl ? dispatch(storeSetting(SETTINGS_STORAGE_SERVER_URL_NAME, settingsObject.serverUrl)) : () => {
                }
            ]
        )
            .then(
                dispatch(saveSettings(SAVE_STATUS_SUCCESSFUL))
            )
            .then(
                console.log('saved settings successfully!')
            )
            .catch(dispatch(saveSettings(SAVE_STATUS_ERROR)))
    }
}

export function storeSetting(name, value) {
    return function (dispatch) {
        return store.update(SETTINGS_STORAGE_PREFIX + name, value)
    }
}

export function retrieveSettings() {
    return function (dispatch) {
        dispatch(loadSettings(LOAD_STATUS_ATTEMPTING));

        return Promise.all(
            [
                dispatch(retrieveSetting(SETTINGS_STORAGE_SERVER_URL_NAME))
            ]
        )
            .then(
                dispatch(loadSettings(LOAD_STATUS_SUCCESS))
            )
            .then(
                console.log('settings retrieved successfully!')
            )
            .catch((err) =>
                console.log(err)
            )
    }
}

export function retrieveSetting(name) {
    return function (dispatch) {
        return store.get(SETTINGS_STORAGE_PREFIX + name)
            .then(value => {
                switch (name) {
                    case SETTINGS_STORAGE_SERVER_URL_NAME:
                        dispatch(updateUrlState(value));
                        return;
                    default:
                        return
                }
            })
    }
}

export function saveSettings(status) {
    return {
        type: types.SAVE_SETTINGS,
        value: status
    }
}

export function loadSettings(status) {
    return {
        type: types.LOAD_SETTINGS,
        value: status
    }
}

export function storePassword(password) {
    return function (dispatch) {

        dispatch(savePassword(SAVE_STATUS_ATTEMPTING))

        return Keychain
            .setGenericPassword('home', password)
            .then(() => {
                dispatch(savePassword(SAVE_STATUS_SUCCESSFUL));
                console.log('Credentials saved successfully');
            })
            .catch((err) => {
                dispatch(savePassword(SAVE_STATUS_ERROR));
                console.log(`Password save error: ${err}`)
            })
    }

}

export function savePassword(status) {
    return {
        type: types.SAVE_PASSOWRD,
        value: status
    }
}