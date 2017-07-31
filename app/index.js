import React from 'react'
import ReactDOM from 'react-dom'
import getRoutes from './config/route'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import * as reducers from 'redux/modules'
import {checkIfAuthed} from './helpers/auth'


const store=createStore(combineReducers(reducers),compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension():(f)=>f
));


function checkAuth(){
    if (store.getState().users.isFetching === true){
        return
    }
    return checkIfAuthed(store)

}

ReactDOM.render(

    <Provider store={store}>
        {getRoutes(checkAuth)}
    </Provider>,
    document.getElementById('app')
)

