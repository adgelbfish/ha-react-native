import * as types from './actionTypes'

import {FETCH_STATE_REQUESTING, FETCH_STATE_RECEIVED} from '../util/constants'

export function getStates(serverInfo) {
    return function (dispatch) {
        dispatch(gettingStates(FETCH_STATE_REQUESTING));
        console.log('get states called')
        return fetch(`${serverInfo.serverUrl}/api/states`, {headers: {'X-HA-access': serverInfo.password}})
            .then(res => res.json()
                .then((json) => {
                    dispatch(addStatesToStore(json))
                }))
            .then(() => dispatch(gettingStates(FETCH_STATE_RECEIVED)))
            .catch(err => console.log(err))
    }
}

export function addStatesToStore(states) {
    return {
        type: types.ADD_STATES_TO_STORE,
        value: states
    }
}

export function gettingStates(status) {
    return {
        type: types.FETCH_STATES_STATUS,
        value: status
    }
}