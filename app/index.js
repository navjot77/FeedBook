import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './config/route'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import users from 'redux/modules/user'


const store=createStore(users,applyMiddleware(thunk));


ReactDOM.render(

    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('app'))

