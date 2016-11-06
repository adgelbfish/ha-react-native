'use strict';

import React, {Component} from 'react'
import {InputGroup, Input, List, ListItem, Text, Button} from 'native-base';

import MainTemplate from './MainTemplate'

export default class Settings extends Component {

    constructor(props) {
        super(props)
        const {retrieveSettings} = this.props;
        retrieveSettings();
    }

    render() {
        const {serverUrl, updateUrlState, updatePasswordState, storeSettings} = this.props;

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
                                value={serverUrl}
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

                <Button
                    block
                    onPress={() => {
                        storeSettings({
                            password: this.props.password,
                            serverUrl
                        })
                    }}
                >
                    Save Settings
                </Button>

            </MainTemplate>
        );
    }
}