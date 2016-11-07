'use strict';

import React, {Component} from 'react'
import {Card, CardItem, Text} from 'native-base'
import {Grid, Col} from 'react-native-easy-grid'
import {Switch} from 'react-native'

export default class StatesSwitch extends Component {
    render() {
        const {serverInfo, entity_id, attributes, callService} = this.props;
        const switchState = this.props.state;
        console.dir(switchState)
        return (
            <Card>
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
                                    onValueChange={value => value ? callService(serverInfo, 'homeassistant', 'turn_on', {entity_id: entity_id}) : callService(serverInfo, 'homeassistant', 'turn_off', {entity_id: entity_id})}/>
                        </Col>
                    </Grid>
                </CardItem>
            </Card>)
    }
}