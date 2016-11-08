'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

import States from '../components/States';
import * as statesActions from '../actions/statesActions';

import {connect} from 'react-redux';

class StatesApp extends Component {
    render() {
        const {state, actions, ownProps} = this.props;
        return (<States {...ownProps} {...state.settings}{...state.states}{...actions}/>);
    }
}

export default connect(
    (state, ownProps) => ({
        state: {ownProps: ownProps, settings: state.settings, states: state.states}
    }),
    (dispatch) => ({
        actions: bindActionCreators(statesActions, dispatch)
    })
)(StatesApp)