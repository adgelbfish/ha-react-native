'use strict';
import React, { Component } from 'react'
import {InputGroup, Input, Text} from 'native-base';

import MainTemplate from './MainTemplate'

export default class Settings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {url} = this.props;

        return (
            <MainTemplate>
                <Text>Server Info:</Text>
                <InputGroup>
                    <Input placeholder='Tap to enter the url of your server'/>
                </InputGroup>
                <InputGroup>
                    <Input placeholder='Tap to enter your password'/>
                </InputGroup>
            </MainTemplate>
        );
    }
}
