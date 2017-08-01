
import React from 'react'
import {ModalC} from 'components'
import {connect} from 'react-redux'

import * as modalActionCreators from 'redux/modules/modal'

import * as ducksCreators from 'redux/modules/ducks'

import { bindActionCreators } from 'redux'

class Modal extends React.Component{

    constructor(props){
        super(props)
    }
    render(){

        return(

            <ModalC user={this.props.user}  duckText={this.props.duckText}
            isOpen={this.props.isOpen} isSubmitDisabled={this.props.isSubmitDisabled}
            openModal={this.props.openModal} closeModal={this.props.closeModal}
            updateModal={this.props.updateModal} duckFanout={this.props.duckFanout}/>
        )
    }




}

function mapStateToProps ({modal, users}) {
    const duckTextLength = modal.duckText.length;
    return {
        user: users[users.authedId] ? users[users.authedId].info : {},
        duckText: modal.duckText,
        isOpen: modal.isOpen,
        isSubmitDisabled: duckTextLength <= 0 || duckTextLength > 140,
    }
}
function mapDispatchToProps (dispatch, props) {
    return bindActionCreators({...modalActionCreators, ...ducksCreators}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal)