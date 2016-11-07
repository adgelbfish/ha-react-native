'use strict';

import React, {Component} from 'react'

import MainTemplateApp from '../containers/MainTemplateApp'

import {STATES_SCREEN_NAME, FETCH_STATE_REQUESTING} from '../util/constants'

import validUrl from 'valid-url'

import {Card, CardItem, Text} from 'native-base'
import {Col, Grid} from 'react-native-easy-grid'
import {Switch} from 'react-native'
import StatesSwitch from './StatesSubComponents/StatesSwitch'
export default class States extends Component {
    constructor(props) {
        super(props)
    }

    fetchStates() {
        const {getStates, serverUrl, password} = this.props;
        if (validUrl.is_http_uri(serverUrl, true)) {
            getStates({serverUrl, password});
            console.log('getStates() called')
        } else {
            console.log('invalid url supplied')
        }
    }

    componentDidMount() {
        this.fetchStates()
    }

    render() {
        const {states, statesFetchStatus, callService, serverUrl, password} = this.props;
        const serverInfo = {serverUrl, password}
        console.log(states);
        const switches = states ? states.filter(object => {
            if (typeof object.entity_id === 'string') {
                return object.entity_id.split('.')[0] === 'switch'
            } else {
                return false
            }
        }).map(object =>
            <StatesSwitch serverInfo={serverInfo} state={object.state} entity_id={object.entity_id}
                          attributes={object.attributes}
                          callService={callService} key={object.entity_id}/>
        ) : undefined
        return (
            <MainTemplateApp screenTitle={STATES_SCREEN_NAME}>
                {statesFetchStatus === FETCH_STATE_REQUESTING ? <Text>Loading...</Text> : undefined}
                {switches}
            </MainTemplateApp>
        )
    }
}
