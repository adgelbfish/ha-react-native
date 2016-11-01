import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import IndexComponent from './index.js'

export default class haReactNative extends Component {
    render() {
        return (
            <IndexComponent/>
        );
    }
}

AppRegistry.registerComponent('haReactNative', () => haReactNative);
