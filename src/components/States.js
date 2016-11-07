'use strict';

import React, {Component} from 'react'

import MainTemplateApp from '../containers/MainTemplateApp'

import {STATES_SCREEN_NAME, FETCH_STATE_REQUESTING} from '../util/constants'

import validUrl from 'valid-url'

import {Card, CardItem, Text} from 'native-base'
import {Col, Grid} from 'react-native-easy-grid'
import {Switch} from 'react-native'

export default class States extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {getStates, serverUrl, password} = this.props;
        if (validUrl.is_http_uri(serverUrl, true)) {
            getStates({serverUrl, password});
            console.log('getStates() called')
        } else {
            console.log('invalid url supplied')
        }
    }

    render() {
        const {states, statesFetchStatus} = this.props;
        console.log(states);
        return (
            <MainTemplateApp screenTitle={STATES_SCREEN_NAME}>
                {statesFetchStatus === FETCH_STATE_REQUESTING ? <Text>Loading...</Text> : undefined}
                {states ? states.map(object =>
                    <Card key={object.entity_id}>
                        <CardItem>
                            <Grid>
                                <Col>
                                    <Text>{object.attributes.friendly_name || object.attributes.title || object.entity_id}</Text>
                                </Col>
                                <Col>
                                    <Text>{object.state}</Text>
                                </Col>
                                <Col>
                                    <Switch value={object.state === 'on'}/>
                                </Col>
                            </Grid>
                        </CardItem>
                    </Card>) : undefined}
            </MainTemplateApp>
        )
    }
}