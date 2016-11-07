'use strict';

import React, {Component} from 'react'
import SettingsApp from '../containers/SettingsApp'
import StatesApp from '../containers/StatesApp'
import MainTemplateApp from '../containers/MainTemplateApp'
import {NAVIGATION_PAGE_STATES, NAVIGATION_PAGE_SETTINGS} from '../util/constants'


export default class AppIndex extends Component {
    constructor(props){
        super(props);
        const {retrieveSettings} = this.props;
        retrieveSettings();
    }

    render() {
        const {page} = this.props;
        const getPageToRender = function (desiredPage) {
            switch (desiredPage) {
                case NAVIGATION_PAGE_SETTINGS:
                    return (<SettingsApp/>);
                case NAVIGATION_PAGE_STATES:
                    return (<StatesApp/>);
                default:
                    return (<MainTemplateApp/>);
            }
        };
        return (getPageToRender(page));
    }
}