export function formatUserInfo (name, avatar, uid) {
    return {
        name,
        avatar,
        uid,
    }
}

export function formatDuck (text, {name, avatar, uid}) {
    return {
        text,
        name,
        avatar,
        uid,
        timestamp: Date.now(),
    }
}

export function timeFormat(timestamp){
    const date=new Date(timestamp);
    return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`
}