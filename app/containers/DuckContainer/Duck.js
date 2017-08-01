import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {DuckC} from 'components'
import {withRouter} from 'react-router-dom'




class Duck extends React.Component{

    constructor(props){
        super(props)
        this.handleDuckClick=this.handleDuckClick.bind(this);
        this.handleProfileClick=this.handleDuckClick.bind(this)
    }

   handleProfileClick(){
    this.props.history.push('/')

}
  handleDuckClick(){
    this.props.history.push('/duckDetails/')

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

export default withRouter(connect(stateToProps)(Duck))