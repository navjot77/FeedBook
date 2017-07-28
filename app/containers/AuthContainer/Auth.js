/**
 * Created by navjotsingh1 on 7/28/17.
 */
import React from 'react'
import {AuthC} from 'components'
import getAuth from 'helpers/auth'

class Auth extends React.Component {
    constructor (props) {
        super(props);
        this.handleonAuth=this.handleonAuth.bind(this);
    }
    handleonAuth(){
        getAuth().then((res)=>{
            console.log(res)
        })

    }
    render () {
        return <AuthC onAuth={this.handleonAuth} error="" isFetching="{false}" />
    }

}
export default Auth
