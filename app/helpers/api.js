
import { ref } from 'config/constant'

function saveToDucks (duck) {
    const duckId = ref.child('ducks').push().key
    const duckPromise = ref.child(`ducks/${duckId}`).set({...duck, duckId})
    return {
        duckId,
        duckPromise,
    }
}

function saveToUsersDucks (duck, duckId) {
    return ref.child(`usersDucks/${duck.uid}/${duckId}`)
        .set({...duck, duckId})
}

function saveLikeCount (duckId) {
    return ref.child(`likeCount/${duckId}`).set(0)
}

export function saveDuck (duck) {
    const { duckId, duckPromise } = saveToDucks(duck)

    return Promise.all([
        duckPromise,
        saveToUsersDucks(duck, duckId),
        saveLikeCount(duckId),
    ]).then(() => ({...duck, duckId}))
}


export function listenToFeed (cb, errorCB) {
    ref.child('ducks').on('value', (snapshot) => {
        const feed = snapshot.val() || {}
        const sortedIds = Object.keys(feed).sort((a, b) => feed[b].timestamp - feed[a].timestamp)
        cb({feed, sortedIds})
    }, errorCB)
}


export function fetchUserLikes(uid){
    return ref.child('userLikes').once('value').then((snapshot)=>{
        snapshot.val() || {}
    })

}
export function addlikeF(duckId){
    return ref.child(`likeCount/${duckId}`).transaction((current=0)=>{
        current+1;
    })

}
export function removelikeF(duckId){
    return ref.child(`likeCount/${duckId}`).transaction((current=0)=>{
        current-1;
    })

}
export function addUserslikeF(uid,duckid){
    return ref.child(`userLikes/${uid}/${duckid}`).set(true);

}
export function removeUserslikeF(){
    return ref.child(`userLikes/${uid}/${duckid}`).set(null);

}