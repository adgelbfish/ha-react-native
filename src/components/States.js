'use strict';

import React, {Component} from 'react'

import MainTemplateApp from '../containers/MainTemplateApp'

import {STATES_SCREEN_NAME} from '../util/constants'

import {Text} from 'native-base'

export default class States extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {states, getStates} = this.props;
        if (this.serverUrl) {
            getStates({serverUrl: this.serverUrl, password: this.password});
        }
    }

    render() {
        return (
            <MainTemplateApp screenTitle={STATES_SCREEN_NAME}>
                <Text>Hello States!</Text>
            </MainTemplateApp>
        )
    }
}
