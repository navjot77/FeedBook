
import React from 'react'
import {ModalC} from 'components'
import {connect} from 'react-redux'

import * as modalActionCreators from 'redux/modules/modal'


import { bindActionCreators } from 'redux'

class Modal extends React.Component{

    constructor(props){
        super(props)
    }
    render(){

        console.log('Inside modal container')
        return(

            <ModalC user={this.props.user}  duckText={this.props.duckText}
            isOpen={this.props.isOpen} isSubmitDisabled={this.props.isSubmitDisabled}
            openModal={this.props.openModal} closeModal={this.props.closeModal}
            updateModal={this.props.updateModal} />
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
    return bindActionCreators(modalActionCreators, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal)