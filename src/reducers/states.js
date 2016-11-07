'use strict';

import * as types from '../actions/actionTypes';

import {FETCH_STATE_NONE} from '../util/constants'

const initialState = {
    states: null,
    statesFetchStatus: FETCH_STATE_NONE
};

export default function states(state = initialState, action = {}) {
    switch (action.type) {
        case types.FETCH_STATES_STATUS:
            return {
                ...state,
                statesFetchStatus: action.value
            };
        case types.ADD_STATES_TO_STORE:
            return {
                ...state,
                states: action.value
            };
        default:
            return state
    }
}