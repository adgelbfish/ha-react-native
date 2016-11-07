'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

import MainTemplate from '../components/MainTemplate';
import * as mainTemplateActions from '../actions/mainTemplateActions';

import {connect} from 'react-redux'

class MainTemplateApp extends Component {
    render() {
        const {state, actions} = this.props;
        return (
            <MainTemplate {...state} {...actions}>
                {this.props.children}
            </MainTemplate>
        )
    }
}

export default connect(
    (state) => ({
        state: state.mainTemplate
    }),
    (dispatch) => ({
        actions: bindActionCreators(mainTemplateActions, dispatch)
    })
)(MainTemplateApp)