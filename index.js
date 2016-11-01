import React, {Component} from 'react';
import {Container, Content, Header, Button, Icon, Title, InputGroup, Input, Text} from 'native-base';

export default class IndexComponent extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Button transparent>
                        <Icon name='ios-arrow-back'/>
                    </Button>

                    <Title>Home Assistant - App Settings</Title>

                    <Button transparent>
                        <Icon name='ios-menu'/>
                    </Button>
                </Header>
                <Content>
                    <Text>Server Info:</Text>
                    <InputGroup>
                        <Input placeholder='Tap to enter the url of your server'/>
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder='Tap to enter your password'/>
                    </InputGroup>
                </Content>
            </Container>
        );
    }
}