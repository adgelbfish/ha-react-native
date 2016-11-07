'use strict';

import React, {Component} from 'react'
import {InputGroup, Input, List, ListItem, Text, Button} from 'native-base';

import MainTemplateApp from '../containers/MainTemplateApp'

import {SETTINGS_SCREEN_NAME} from '../util/constants'


export default class Settings extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {retrieveSettings} = this.props;
        retrieveSettings();
    }

    render() {
        const {serverUrl, updateUrlState, updatePasswordState, storeSettings} = this.props;

        return (
            <MainTemplateApp screenTitle={SETTINGS_SCREEN_NAME}>
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
                                placeholder='Tap to enter or update your password'
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

            </MainTemplateApp>
        );
    }
}