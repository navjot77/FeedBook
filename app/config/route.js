import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect,Link, withRouter} from 'react-router-dom'
import {Main,Navigation,Auth, Feed, Logout } from 'containers'

export default function getRoutes(checkAuth){
    return(

            <Router>
                <div>
                <Route  path='/' component={Navigation}></Route>
                <Switch>
                <Route exact path='/' component={Main}></Route>

                    <Route  path='/auth' render={()=>( checkAuth() === false ? (
                        <Auth />
                    ) :(
                        <Redirect to="/"/>
                    ) )}> </Route>

                <Route  path='/feed' render={()=>(checkAuth() === true ? (
                    <Feed />
                ) :(
                    <Redirect to="/"/>
                ) )}> </Route>
                <Route  path='/logout' component={Logout}></Route>
                <Route render={function(){<h1>Page not found</h1>}}></Route>
                </Switch>
                </div>
            </Router>

    )
}

