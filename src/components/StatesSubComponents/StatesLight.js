'use strict';

import React, {Component} from 'react'
import {CardItem, Text} from 'native-base'
import {Grid, Col} from 'react-native-easy-grid'
import {Switch} from 'react-native'
import {SERVICE_DOMAIN_HOME_ASSISTANT} from "../../util/constants";


export default class StatesLight extends Component {
    render() {
        const {serverInfo, entity_id, attributes, callService} = this.props;
        const lightState = this.props.state;
        return (
            <CardItem>
                <Grid>
                    <Col>
                        <Text>{attributes.friendly_name || entity_id}</Text>
                    </Col>
                    <Col>
                        <Text>{lightState}</Text>
                    </Col>
                    <Col>
                        <Switch value={lightState === 'on'}
                                onValueChange={value => value ? callService(serverInfo, SERVICE_DOMAIN_HOME_ASSISTANT, 'turn_on', {entity_id: entity_id}) : callService(serverInfo, SERVICE_DOMAIN_HOME_ASSISTANT, 'turn_off', {entity_id: entity_id})}/>
                    </Col>
                </Grid>
            </CardItem>
        )
    }
}