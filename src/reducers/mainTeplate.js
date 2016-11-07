'use strict';

import * as types from '../actions/actionTypes'

import {NAVIGATION_PAGE_STATES} from '../util/constants'

const initialState = {
    page: NAVIGATION_PAGE_STATES
};

export default function mainTemplate(state = initialState, action = {}) {
    switch (action.type) {
        case types.SET_NAVIGATION_PAGE:
            return {
                ...state,
                page: action.value
            };
        default:
            return state;
    }
}
