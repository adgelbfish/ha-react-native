'use strict';

import React, {Component} from 'react'
import {CardItem, Text} from 'native-base'
import {Grid, Col} from 'react-native-easy-grid'
import {Switch} from 'react-native'
import {SERVICE_DOMAIN_HOME_ASSISTANT, SERVICE_ACTION_TURN_OFF, SERVICE_ACTION_TURN_ON} from '../../util/constants'

export default class StatesSwitch extends Component {
    render() {
        const {serverInfo, entity_id, attributes, callService} = this.props;
        const switchState = this.props.state;
        return (
            <CardItem>
                <Grid>
                    <Col>
                        <Text>{attributes.friendly_name || entity_id}</Text>
                    </Col>
                    <Col>
                        <Text>{switchState}</Text>
                    </Col>
                    <Col>
                        <Switch value={switchState === 'on'}
                                onValueChange={value => value ? callService(serverInfo, SERVICE_DOMAIN_HOME_ASSISTANT, SERVICE_ACTION_TURN_ON, {entity_id: entity_id}) : callService(serverInfo, SERVICE_DOMAIN_HOME_ASSISTANT, SERVICE_ACTION_TURN_OFF, {entity_id: entity_id})}/>
                    </Col>
                </Grid>
            </CardItem>
        )
    }
}