import React from 'react'
import {NavigationC} from 'components'

class Navigation extends React.Component {

    constructor (props) {
        super(props)

        this.state={
            isAuthed:false
        }

    }

    render () {
        return  (<NavigationC isAuthed={this.state.isAuthed}/>);
    }

}
export default Navigation
