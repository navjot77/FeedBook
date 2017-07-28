import React from 'react'
import {display_header, display_label, display_container} from './styles.css'


function Button(props){
    return(
        <div className={display_container}>
            <button className={display_label} onClick={props.onAuth}> facebook login
            </button>
        </div>)
}

function AuthC(props) {
    return (

      <div className={display_container}>
          <h1 className={display_header}>Authentication</h1>
         <Button onAuth={props.onAuth}/>
        </div>

    )
}


export default AuthC
