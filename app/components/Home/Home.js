import React from 'react'
import {display_header, display_label, display_container} from './styles.css'

function HomeC() {
        return (

                <div className={display_container}>
                    <h1 className={display_header}>FeedBook</h1>
                    <h3 className={display_label}>Find New Friends, Socialize, Network......</h3>
                </div>

        )
    }


export default HomeC
