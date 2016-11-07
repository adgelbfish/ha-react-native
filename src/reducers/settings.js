'use strict';

import * as types from '../actions/actionTypes';
import {SAVE_STATUS_UNKNOWN} from '../util/constants'

const initialState = {
    serverUrl: null,
    password: null,
    status: {
        saveAll: SAVE_STATUS_UNKNOWN,
        savePassword: SAVE_STATUS_UNKNOWN
    }
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
        //TODO add load state
        case types.SAVE_SETTINGS:
            return {
                ...state,
                status: {
                    ...state.status,
                    saveAll: action.value
                }
            };
        case types.SAVE_PASSOWRD:
            return {
                ...state,
                status: {
                    ...state.status,
                    savePassword: action.value
                }
            };
        default:
            return state;
    }
}