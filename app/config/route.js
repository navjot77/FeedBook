import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Main,Navigation} from '../containers'


class Routes extends React.Component {

  render () {
    return (
        <div>

            <Navigation />
            <Router>
                <Route path='/' component={Main}></Route>

            </Router>

        </div>
        )
  }
}

export default Routes
