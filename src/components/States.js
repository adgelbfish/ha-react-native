'use strict';

import React, {Component} from 'react'

import MainTemplateApp from '../containers/MainTemplateApp'

import {STATES_SCREEN_NAME, FETCH_STATE_REQUESTING} from '../util/constants'
import {getDomainFromEntityId} from '../util/stringFunctions'

import validUrl from 'valid-url'

import {Text} from 'native-base'
import {Switch} from 'react-native'
import StatesSwitch from './StatesSubComponents/StatesSwitch'
import StatesLight from './StatesSubComponents/StatesLight'
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

    getSwitches(states) {
        return states ? states.filter(object => {
            return getDomainFromEntityId(object.entity_id) === 'switch'
        }).map(object =>
            <StatesSwitch serverInfo={this.serverInfo} state={object.state} entity_id={object.entity_id}
                          attributes={object.attributes}
                          callService={this.props.callService} key={object.entity_id}/>
        ) : undefined;
    }

    getLights(states) {
        return states ? states.filter(object => {
            return getDomainFromEntityId(object.entity_id) === 'light'
        }).map(object =>
            <StatesLight serverInfo={this.serverInfo} state={object.state} entity_id={object.entity_id}
                                   attributes={object.attributes}
                                   callService={this.props.callService} key={object.entity_id}/>
        ): undefined
    }

    serverInfo = {serverUrl: this.props.serverUrl, password: this.props.password};


    render() {
        const {states, statesFetchStatus, callService, serverUrl, password} = this.props;
        console.log(states);
        const switches = this.getSwitches(states);
        const lights = this.getLights(states);
        return (
            <MainTemplateApp screenTitle={STATES_SCREEN_NAME}>
                {statesFetchStatus === FETCH_STATE_REQUESTING ? <Text>Loading...</Text> : undefined}
                {switches}
                {lights}
            </MainTemplateApp>
        )
    }
}
