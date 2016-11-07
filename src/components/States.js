'use strict';

import React, {Component} from 'react'

import MainTemplateApp from '../containers/MainTemplateApp'

import {STATES_SCREEN_NAME} from '../util/constants'

import validUrl from 'valid-url'

import {Card, CardItem, Text} from 'native-base'

export default class States extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const {getStates, serverUrl, password} = this.props;
        if (validUrl.is_http_uri(serverUrl, true)) {
            getStates({serverUrl, password});
            console.log('getStates() called')
        }else{
            console.log('invalid url supplied')
        }
    }

    render() {
        const {states} = this.props;
        console.log(states);
        const cards = states.map(object =>
            <Card key={object.entity_id}>
                <CardItem header>
                    <Text>{object.attributes.friendly_name || object.entity_id}</Text>
                </CardItem>
            </Card>
        );
        return (
            <MainTemplateApp screenTitle={STATES_SCREEN_NAME}>
                {cards}
            </MainTemplateApp>
        )
    }
}
