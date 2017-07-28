import React from 'react'
import {NavigationC} from 'components'

class Navigation extends React.Component {

    constructor (props) {
        super(props)

        this.state={
            isAuthed:true
        }

    }

    render () {
        return  (<NavigationC isAuthed={this.state.isAuthed}/>);
    }

}
export default Navigation
