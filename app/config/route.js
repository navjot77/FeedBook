import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Main,Navigation,Auth} from '../containers'

class Routes extends React.Component {

  render() {
    return (

            <Router>
                <div>
                <Navigation />
                <Switch>
                <Route exact path='/' component={Main}></Route>
                <Route  path='/auth' component={Auth}></Route>
                <Route render={function(){<h1>Page not found</h1>}}></Route>
                </Switch>
                </div>
            </Router>


        )
  }
}

export default Routes
