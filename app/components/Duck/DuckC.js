import React from 'react'
import {timeFormat} from 'helpers/utils'
import Reply from 'react-icons/lib/fa/mail-reply'
import Star from 'react-icons/lib/fa/star'
import PropTypes from 'prop-types'
import {
    duckContainer, contentContainer, avatar, actionContainer,
    header, text, likeReplyContainer, icon, likedIcon, author,
} from './stylesheet.css'

function DuckC(props) {
    const starIcon=props.activeLike === true? likedIcon: icon;
    const starFn=props.activeLike === true ? props.removeLikeThunk : props.addLikeThunk;

    return (

        <div
            className={duckContainer}
            style={{cursor: props.showReplies === true ? 'default' : 'pointer'}}
            onClick={props.onClick}>
            <img src={props.duck.avatar} className={avatar}/>
            <div className={contentContainer}>
                <div className={header}>
                    <div onClick={(e)=>props.onProfileClick(e)} className={author}>{props.duck.name}</div>
                    <div>{timeFormat(props.duck.timestamp)}</div>
                </div>
                <div className={text}>{props.duck.text}</div>
                <div className={likeReplyContainer}>
                    {props.showReplies === false
                        ? null
                        : <Reply className={icon} />}
                    <div className={actionContainer}>
                        <Star className={starIcon} onClick={(e) => starFn(props.duck.duckId, e)} />
                        {props.showLikeCount === false ? null : <div>{props.numberOfLikes}</div>}
                    </div>
                </div>
            </div>
        </div>

    )
}

DuckC.propTypes={
    duck: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        duckId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        uid: PropTypes.string.isRequired,
    }),
    likeCount:PropTypes.number,
    showLikeCount:PropTypes.bool.isRequired,
    showReplies:PropTypes.bool.isRequired,
    activeLike:PropTypes.bool.isRequired,
    addLikeThunk:PropTypes.func,
    removeLikeThunk:PropTypes.func,
    onClick:PropTypes.func.isRequired,
    onProfileClick:PropTypes.func.isRequired,
}

export default DuckC
