'use strict';

import React, {Component} from 'react'
import {Container, Content, Header, Button, Icon, Title, Footer, FooterTab} from 'native-base';
import {Actions} from 'react-native-router-flux'

export default class MainTemplate extends Component {
    render() {
        const {url, screenTitle, setNavigationPage} = this.props;

        return (
            <Container>
                <Header>

                    <Title>Home Assistant - {screenTitle}</Title>

                </Header>
                <Content>
                    {this.props.children}
                </Content>
                <Footer>
                    <FooterTab>
                        <Button
                            onPress={Actions.STATES}
                        >
                            States
                            <Icon name="md-apps" />
                        </Button>
                        <Button
                            onPress={Actions.SETTINGS}
                        >
                            Settings
                            <Icon name='md-settings'/>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }

};

