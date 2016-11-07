'use strict';

import * as types from './actionTypes'

export function setNavigationPage(page) {
    return {
        type: types.SET_NAVIGATION_PAGE,
        value: page
    }
}