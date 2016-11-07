'use strict';

import React, {Component} from 'react';

import AppIndex from '../components/AppIndex';
import * as appIndexActions from '../actions/appIndexActions'
import * as settingsActions from '../actions/settingsActions'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class AppIndexApp extends Component {
    render() {
        const {state, actions} = this.props;
        return(
            <AppIndex {...state} {...actions}/>
        )
    }
}

export default connect(
    (state) => ({
        state: {page: state.mainTemplate.page}
    }),
    (dispatch) => ({
        actions: {
            ...bindActionCreators(appIndexActions, dispatch),
            ...bindActionCreators(settingsActions, dispatch)
        }
    })
)(AppIndexApp)