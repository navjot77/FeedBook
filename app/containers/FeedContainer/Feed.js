import React from 'react'
import {FeedC} from 'components'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import * as feedActionCreators from 'redux/modules/feed'


class Feed extends React.Component {
    constructor (props) {
        super(props);

    }

    componentDidMount () {
        this.props.setAndHandleFeedListener()
    }
    render () {
        return (
            <FeedC
                duckIds={this.props.duckIds}
                newDucksAvailable={this.props.newDucksAvailable}
                error={this.props.error}
                isFetching={this.props.isFetching}
                resetNewDucksAvailable={this.props.resetNewDucksAvailable} />
        )
    }
}

Feed.proptypes={
    duckIds: PropTypes.array.isRequired,
    newDucksAvailable: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    setAndHandleFeedListener: PropTypes.func.isRequired,
    resetNewDucksAvailable: PropTypes.func.isRequired,
}





function mapStateToProps ({feed}) {
    const { newDucksAvailable, error, isFetching, duckIds } = feed
    return {
        newDucksAvailable,
        error,
        isFetching,
        duckIds,
    }
}

export default connect(
    mapStateToProps,
    (dispatch) => bindActionCreators(feedActionCreators, dispatch)
)(Feed)