import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {DuckC} from 'components'
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import * as likeActionCreators from 'redux/modules/usersLikes'
class Duck extends React.Component{

    constructor(props){
        super(props)
        this.handleDuckClick=this.handleDuckClick.bind(this);
        this.handleProfileClick=this.handleDuckClick.bind(this)
    }

   handleProfileClick(){
    this.props.history.push({
        pathname:'/',
        search:`?userId=${props.duck.uid}`
    })

}
  handleDuckClick(){
      this.props.history.push({
          pathname:'/duckDetails/',
          search:`?duckId=${props.duck.duckId}`
      })

  }

    render(){
        return(
            <DuckC onProfieClick={this.handleProfileClick}
                   onClick={this.props.showReplies === true ? null : this.handleDuckClick}
                   {...this.props}/>
        )
    }

}

Duck.defaultProps={
    showLikeCount:false,
    showReplies:true
}


Duck.propTypes={
    duck:PropTypes.object.isRequired,
    likeCount:PropTypes.number,
    showLikeCount:PropTypes.bool.isRequired,
    showReplies:PropTypes.bool.isRequired,
    activeLike:PropTypes.bool.isRequired,
    addLikeCount:PropTypes.func,
    removeLikeCount:PropTypes.func,
    addLikeThunk:PropTypes.func.isRequired,
    removeLikeThunk:PropTypes.func.isRequired,
}




function stateToProps({ducks,usersLikes, likeCount},props){


    return{
        duck:ducks[props.duckId],
        likeCount: likeCount[props.duckId],
        activeLike: usersLikes[props.duckId] === true,
        showLikeCount: props.showLikeCount,
        showReplies: props.showReplies,
    }
}
function mapActionToDispatch(dispatch){
 
    return bindActionCreators(likeActionCreators, dispatch)


}
export default withRouter(connect(stateToProps,mapActionToDispatch)(Duck))