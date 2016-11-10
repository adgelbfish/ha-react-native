'use strict';

import React, {Component} from 'react'
import SettingsApp from '../containers/SettingsApp'
import StatesApp from '../containers/StatesApp'
import {NAVIGATION_PAGE_STATES, NAVIGATION_PAGE_SETTINGS} from '../util/constants'
import {Scene, Router} from 'react-native-router-flux'

export default class AppIndex extends Component {
    render() {
        return <Router>
            <Scene key="root">
                <Scene key={NAVIGATION_PAGE_SETTINGS} component={SettingsApp} title="App Settings" hideNavBar animation='fade'/>
                <Scene key={NAVIGATION_PAGE_STATES} component={StatesApp} title="States" hideNavBar animation='fade'/>
            </Scene>
        </Router>
    }
}