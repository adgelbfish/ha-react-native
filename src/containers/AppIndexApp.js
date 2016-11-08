'use strict';

import React, {Component} from 'react';

import AppIndex from '../components/AppIndex';
import * as appIndexActions from '../actions/appIndexActions'
import * as settingsActions from '../actions/settingsActions'
import * as statesActions from '../actions/statesActions'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class AppIndexApp extends Component {
    render() {
        const {state, actions} = this.props;
        return(
            <AppIndex {...state} {...actions.appIndex} {...actions.settings} {...actions.states}/>
        )
    }
}

export default connect(
    (state, ownProps) => ({
        state: {...ownProps, ...state.settings, page: state.mainTemplate.page}
    }),
    (dispatch) => ({
        actions: {
            appIndex: bindActionCreators(appIndexActions, dispatch),
            settings: bindActionCreators(settingsActions, dispatch),
            states: bindActionCreators(statesActions, dispatch)
        }
    })
)(AppIndexApp)