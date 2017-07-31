/**
 * Created by navjotsingh1 on 7/28/17.
 */
import React from 'react'
import {AuthC} from 'components'

import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import * as UserActions from 'redux/modules/user'
import { bindActionCreators } from 'redux'
import { Redirect} from 'react-router-dom'
import {withRouter} from 'react-router-dom'


class Auth extends React.Component {
    constructor (props) {
        super(props);
        this.handleonAuth=this.handleonAuth.bind(this);
    }
    handleonAuth(e){

        this.props.dispatch(UserActions.applyMiddleThunkUsers()).then(()=>{

            this.props.history.push('/feed')
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
console.log(state)
    return{
        isFetching:state.isFetching,
        error:state.error
    }
}
//Canbe used to bind dispact witha ctions and then actioncreators will be availabel in props.
const mapDispatchToProps = (dispatch) => bindActionCreators(UserActions,dispatch);

export default withRouter(connect(mapStateTProps)(Auth))
