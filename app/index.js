import React from 'react';
import ReactDOM from 'react-dom';


class Main extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        return(<h1>Welcome Duck....</h1>)
    }

}

ReactDOM.render(<Main />, document.getElementById('app'));
