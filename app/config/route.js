import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Main} from '../container';

class Routes extends React.Component{


    render(){

        return(

            <Router>
                <Route path='/' component={Main}></Route>

            </Router>
        )
    }
}

export default Routes;