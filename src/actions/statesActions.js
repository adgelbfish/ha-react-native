import * as types from './actionTypes'

import {FETCH_STATE_REQUESTING, FETCH_STATE_RECEIVED} from '../util/constants'
import {is_http_uri} from 'valid-url'
import {returnPasswordHeaderIfPassword} from '../util/httpFunctions'

export function getStates(serverInfo) {
    return function (dispatch) {
        dispatch(gettingStates(FETCH_STATE_REQUESTING));
        console.log('get states called', serverInfo.serverUrl);
        return is_http_uri(serverInfo.serverUrl, true) ? fetch(`${serverInfo.serverUrl}/api/states`, returnPasswordHeaderIfPassword(serverInfo.password))
            .then(res => res.json()
                .then((json) => {
                    dispatch(addStatesToStore(json))
                }))
            .then(() => dispatch(gettingStates(FETCH_STATE_RECEIVED)))
            .catch(err => console.log(err)) : Promise.all([])
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

export function callService(serverInfo, domain, service, serviceData) {
    return function(dispatch) {
        return fetch(`${serverInfo.serverUrl}/api/services/${domain}/${service}`, {method: 'POST', body: JSON.stringify(serviceData), headers: {'X-HA-access': serverInfo.password}})
            .then(() => dispatch(getStates(serverInfo)))
            .catch(err => console.log(err))

    }
}

