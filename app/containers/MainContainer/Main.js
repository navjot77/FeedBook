import React from 'react'
import {HomeC} from 'components'
import {connect} from 'react-redux'

import {firebaseAuth} from 'config/constant'
import * as UserActionsC from 'redux/modules/user'

class Main extends React.Component {
  constructor (props) {
    super(props)
  }
componentDidMount(){

    console.log('component Main Mounted');
    firebaseAuth().onAuthStateChanged((user)=>{
      if (user){
          const userData=user.providerData[0];
          const userInfo={
              name:userData.displayName,
              avatar:userData.photoURL,
              uid:user.uid
          };
          this.props.dispatch(UserActionsC.authUser(userInfo.uid));
          this.props.dispatch(UserActionsC.fetchSuccess(user.uid, userInfo, Date.now()));
          if(this.props.location.pathname === '/'){
            this.props.history.push('/feed')
          }
      }

    })


}
  render () {
    return (this.props.isFetching===true? null : <HomeC />)
  }

}


function stateToProps(state){
  return{
    isFetching:state.isFetching
  }


}
export default connect(stateToProps)(Main)
