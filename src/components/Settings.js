'use strict';
import React, {Component} from 'react'
import {InputGroup, Input, List, ListItem, Text} from 'native-base';

import MainTemplate from './MainTemplate'

export default class Settings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {url} = this.props;

        return (
            <MainTemplate>
                <List>
                    <ListItem itemDivider>
                        <Text>Server Info</Text>
                    </ListItem>

                    <ListItem>
                        <InputGroup>
                            <Input inlineLabel label="Address" placeholder='Tap to enter the url of your server'/>
                        </InputGroup>
                    </ListItem>

                    <ListItem>
                        <InputGroup>
                            <Input inlineLabel label="Password" placeholder='Tap to enter your password'/>
                        </InputGroup>
                    </ListItem>
                </List>
            </MainTemplate>
        );
    }
}