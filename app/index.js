import React from 'react'
import ReactDOM from 'react-dom'
import getRoutes from './config/route'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import users from 'redux/modules/user'
import {checkIfAuthed} from './helpers/auth'


const store=createStore(users,applyMiddleware(thunk));


function checkAuth(){
    if (store.getState().isFetching === true){
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

