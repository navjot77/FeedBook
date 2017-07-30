import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect,Link} from 'react-router-dom'
import {Main,Navigation,Auth, Feed, Logout } from 'containers'

export default function getRoutes(checkAuth){
    return(

            <Router>
                <div>
                <Route  path='/' component={Navigation}></Route>
                <Switch>
                <Route exact path='/' component={Main}></Route>
                <Route  path='/auth' component={Auth} ></Route>
                <Route  path='/feed' render={()=>(checkAuth() === false ? (
                    <Redirect to="/"/>
                ) :(
                    <Redirect to="/logout"/>
                ) )}> </Route>
                <Route  path='/logout' component={Logout}></Route>
                <Route render={function(){<h1>Page not found</h1>}}></Route>
                </Switch>
                </div>
            </Router>

    )
}

