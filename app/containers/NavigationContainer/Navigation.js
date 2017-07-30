import React from 'react'
import {NavigationC} from 'components'
import {connect } from 'react-redux'

class Navigation extends React.Component {

    constructor (props) {
        super(props)

    }

    render () {


        return  (<NavigationC isAuthed={this.props.isAuthed}/>);
    }

}
export default connect(
    (state)=>({
        isAuthed:state.isAuthed
    })
)(Navigation)
