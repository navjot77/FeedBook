/**
 * Created by navjotsingh1 on 7/28/17.
 */
import React from 'react'
import {AuthC} from 'components'
import getAuth from 'helpers/auth'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import * as UserActions from 'redux/modules/user'

class Auth extends React.Component {
    constructor (props) {
        super(props);
        this.handleonAuth=this.handleonAuth.bind(this);
    }
    handleonAuth(){
        this.props.dispatch(UserActions.fetchingUser());
        getAuth().then((res)=>{
            this.props.dispatch(UserActions.fetchSuccess(res.uid,res,Date.now()));
            this.props.dispatch(UserActions.authUser(res.uid));

        }).catch((err)=>{
            this.props.dispatch(UserActions.fetchFailure(err))
        })

    }
    render () {

        return <AuthC onAuth={this.handleonAuth} error={this.props.error} isFetching={this.props.isFetching} />
    }

}
Auth.prototypes={

    isFetching: PropTypes.bool.isRequired,
        error: PropTypes.string.isRequired

}

function mapStateTProps(state){
    console.log(state);
    return{
        isFetching:state.isFetching,
        error:state.error
    }

}



export default connect(mapStateTProps)(Auth)
