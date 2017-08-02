import React from 'react'
import {HomeC} from 'components'
import {connect} from 'react-redux'

import {firebaseAuth} from 'config/constant'
import * as UserActionsC from 'redux/modules/user'
import * as UserLikeActionC from 'redux/modules/usersLikes'

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
          this.props.dispatch(UserLikeActionC.setUsersLikesThunk());
          if(this.props.location.pathname === '/'){
            this.props.history.push('/feed')
          }
      }
      else{
        this.props.dispatch(UserActionsC.removeFetching())
      }

    })


}
  render () {
    return (this.props.isFetching===true? null : <HomeC />)
  }

}


function stateToProps({users}){
  return{
    isFetching:users.isFetching
  }


}
export default connect(stateToProps)(Main)
