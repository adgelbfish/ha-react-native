'use strict';

import React, {Component} from 'react'
import {Card, CardItem, Text} from 'native-base'

export default class HomeassistantCard extends Component {
    render() {
        const {header} = this.props;
        return (
            <Card>
                <CardItem header>
                    <Text>{header}</Text>
                </CardItem>
            </Card>
        )
    }
}
