'use strict';

import React, {Component} from 'react';

import AppIndex from '../components/AppIndex';
import appIndex from '../reducers/appIndex'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class AppIndexApp extends Component {
    render() {
        const {state} = this.props;
        return(
            <AppIndex {...state}/>
        )
    }
}

export default connect(
    (state) => ({
        state: {page: state.mainTemplate.page}
    }),
    (dispatch) => ({
        actions: bindActionCreators(appIndex, dispatch)
    })
)(AppIndexApp)