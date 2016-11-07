'use strict';

import React, {Component} from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


import * as reducers from '../reducers';
import SettingsApp from './SettingsApp';
import StatesApp from './StatesApp';
import AppIndexApp from './AppIndexApp'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const reducer = combineReducers(reducers);

const store = createStoreWithMiddleware(reducer);


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppIndexApp />
            </Provider>
        );
    }
}