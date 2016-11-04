'use strict';
import React, {Component} from 'react'
import {InputGroup, Input, List, ListItem, Text, Button} from 'native-base';

import MainTemplate from './MainTemplate'

export default class Settings extends Component {
    render() {
        const {serverUrl, updateUrlState, updatePasswordState} = this.props;

        return (
            <MainTemplate>
                <List>
                    <ListItem itemDivider>
                        <Text>Server Info:</Text>
                    </ListItem>

                    <ListItem>
                        <InputGroup>
                            <Input
                                inlineLabel
                                label="ADDRESS"
                                placeholder='Tap to enter the url of your server'
                                onChangeText={(text) => updateUrlState(text)}
                            />
                        </InputGroup>
                    </ListItem>

                    <ListItem>
                        <InputGroup>
                            <Input
                                inlineLabel
                                secureTextEntry
                                label="PASSWORD"
                                placeholder='Tap to enter your password'
                                onChangeText={(text) => updatePasswordState(text)}
                            />
                        </InputGroup>
                    </ListItem>
                </List>
                        <Button block> Save Settings </Button>
            </MainTemplate>
        );
    }
}