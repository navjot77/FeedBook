import React from 'react'
import {LogoutC} from 'components'
import {connect} from 'react-redux'
import {applyMiddleThunkLogout} from 'redux/modules/user'


class Logout extends React.Component {
    constructor (props) {
        super(props);

    }
    componentDidMount(){
    this.props.dispatch(applyMiddleThunkLogout())
    }

    render () {

        return <LogoutC />
    }

}
export default connect()(Logout)
