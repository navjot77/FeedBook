import firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAclj0IC_06JxEcsSLaSN-LbgIgIg_ym9w",
    authDomain: "feedbook-1522c.firebaseapp.com",
    databaseURL: "https://feedbook-1522c.firebaseio.com",
    projectId: "feedbook-1522c",
    storageBucket: "feedbook-1522c.appspot.com",
    messagingSenderId: "804003855931"
};
firebase.initializeApp(config);


export const ref=firebase.database().ref();
export const firebaseAuth=firebase.auth;