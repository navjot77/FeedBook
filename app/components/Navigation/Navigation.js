import React from 'react'
import {active, display_nav, display_list} from './styles.css'
import {NavLink} from 'react-router-dom'

function NavLinks(props){
    return ( <div >
        {props.isAuthed===true
        ?<ul  className={display_list}><li>Home</li></ul>
        :<ul  className={display_list}><li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/auth'>LogIn</NavLink></li>
            </ul>}
    </div>)



}
function ActionLinks(props) {
    return (
        <div>
            {props.isAuthed===true
                ?<ul  className={display_list}><li>New Ducks</li><li>Logout</li></ul>
                :''}
        </div>)
}
function NavigationC(props) {
    return (<div className={display_nav}>
       <NavLinks isAuthed={props.isAuthed}/>
        <ActionLinks isAuthed={props.isAuthed}/>
    </div>)
}


export default NavigationC
