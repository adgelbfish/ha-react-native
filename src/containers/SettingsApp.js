'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Settings from '../components/Settings';
import * as settingsActions from '../actions/settingsActions';
import {connect} from 'react-redux';

class SettingsApp extends Component {
    render() {
        const {state, actions} = this.props;
        return (
            <Settings
                {...state}
                {...actions} />
        );
    }
}

export default connect(
    (state, ownProps) => ({
        state: {...state.settings, ...ownProps}
    }),
    (dispatch) => ({
        actions: bindActionCreators(settingsActions, dispatch)
    })
)(SettingsApp);
