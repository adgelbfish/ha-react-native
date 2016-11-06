'use strict';

import React, { Component } from 'react'
import {Container, Content, Header, Button, Icon, Title} from 'native-base';


export default class MainTemplate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {url} = this.props;

        return (
            <Container>
                <Header>
                    <Button transparent>
                        <Icon name='md-arrow-back'/>
                    </Button>

                    <Title>Home Assistant - App Settings</Title>

                    <Button transparent>
                        <Icon name='md-menu'/>
                    </Button>
                </Header>
                <Content>
                    {this.props.children}
                </Content>
            </Container>
        )
    }

};

