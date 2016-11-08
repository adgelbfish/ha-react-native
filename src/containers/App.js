'use strict';

import React, {Component} from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import observer from 'redux-observer'

import * as reducers from '../reducers';
import AppIndex from '../components/AppIndex'
import {getStates} from '../actions/statesActions'

const updateHandler = (nextState, previousState) => {
    if (nextState.settings.serverUrl !== previousState.settings.serverUrl) {
        store.dispatch(getStates({serverUrl: nextState.settings.serverUrl, password: nextState.settings.password}))
    }
};

const createStoreWithMiddleware = applyMiddleware(thunk, observer(updateHandler))(createStore);

const reducer = combineReducers(reducers);

const store = createStoreWithMiddleware(reducer);


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppIndex />
            </Provider>
        );
    }
}