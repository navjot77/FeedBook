import {ref, firebaseAuth} from '../config/constant'

import firebase from 'firebase'

export default function getAuth(){
    return firebaseAuth().signInWithPopup(new firebase.auth.FacebookAuthProvider())

}

export function loggingOff(){
    return firebaseAuth().signOut()
}

export function checkIfAuthed (store) {
    return store.getState().users.isAuthed
}

export function saveUser(user){

    return ref.child(`users/${user.uid}`).set(user).then(()=> user)
}