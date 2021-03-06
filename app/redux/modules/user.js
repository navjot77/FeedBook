import getAuth,{loggingOff, saveUser} from 'helpers/auth';
const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'
const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
const REMOVE_FETCH = 'REMOVE_FETCHING_API'



export function removeFetching() {
    return {
        type: REMOVE_FETCH,

    }
}


export function authUser(uid) {
    return {
        type: AUTH_USER,
        uid,
    }
}

function unauthUser() {
    return {
        type: UNAUTH_USER,
    }
}

 function fetchingUser() {
    return {
    type: FETCHING_USER,
}}


 function fetchFailure() {
    return {
    type: FETCHING_USER_FAILURE,
        error: 'Error fetching user.',
}}

export function fetchSuccess(uid,user,timestamp) {
    return {
    type: FETCHING_USER_SUCCESS,
        uid,
        user,
        timestamp,
}}


export function applyMiddleThunkUsers(){

    return function(dispatch) {

         dispatch(fetchingUser());
         return getAuth().then(({user,credential}) => {
             const userData=user.providerData[0];
             const userInfo={
               name:userData.displayName,
                 avatar:userData.photoURL,
                 uid:user.uid
             };
             return dispatch(fetchSuccess(user.uid, userInfo, Date.now()));
         }).then(({user})=>saveUser(user))
             .then((user)=>dispatch(authUser(user.uid)))
          .catch((err) => {
            dispatch(fetchFailure(err))
        })
    }

}


export function applyMiddleThunkLogout() {
    return function(dispatch){
    loggingOff();
    dispatch(unauthUser())

    }


}
const initialUserState = {
    lastUpdated: 0,
    info: {
        name: '',
        uid: '',
        avatar: '',
    },
}

function user (state = initialUserState, action) {
    switch (action.type) {
        case FETCHING_USER_SUCCESS :
            return {
                ...state,
                info: action.user,
                lastUpdated: action.timestamp,
            }
        default :
            return state
    }
}

const initialState = {
    isFetching: true,
    error: '',
    isAuthed: false,
    authedId: '',
}

export default function users (state = initialState, action) {
    switch (action.type) {
        case AUTH_USER :
            return {
                ...state,
                isAuthed: true,
                authedId: action.uid,
            }
        case UNAUTH_USER :
            return {
                ...state,
                isAuthed: false,
                authedId: '',
            }
        case FETCHING_USER:
            return {
                ...state,
                isFetching: true,
            }
        case FETCHING_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        case FETCHING_USER_SUCCESS:
            return action.user === null
                ? {
                    ...state,
                    isFetching: false,
                    error: '',
                }
                : {
                    ...state,
                    isFetching: false,
                    error: '',
                    [action.uid]: user(state[action.uid], action),
                }
        case REMOVE_FETCH:
            return {
                ...state,
                isFetching:false,
            }
        default :
            return state
    }
}
