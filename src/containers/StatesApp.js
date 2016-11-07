'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

import States from '../components/States';
import * as statesActions from '../actions/statesActions';

import {connect} from 'react-redux';

class StatesApp extends Component {
    render() {
        const {state, actions} = this.props;
        return (<States {...state.settings}{...state.states}{...actions}/>);
    }
}

export default connect(
    (state) => ({
        state: {settings: state.settings, states: state.states}
    }),
    (dispatch) => ({
        actions: bindActionCreators(statesActions, dispatch)
    })
)(StatesApp)