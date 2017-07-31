
const OPEN_MODAL='OPEN_MODEL'

const  CLOSE_MODAL='CLOSE_MODEL'

const UPDATE_DUCK_TEXT='UPDATE_DUCK_TEXT'

export function openModal(){
    return    {
        type: OPEN_MODAL
    }

}

export function closeModal() {
    return    {        type: CLOSE_MODAL,
    }
}


export function updateModal(newDuckText) {
    return    {
        type: UPDATE_DUCK_TEXT,
            newDuckText,
    }
}


const initialState = {
    duckText: '',
    isOpen: false,
}

export default function modal (state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL :
            return {
                ...state,
                isOpen: true,
            }
        case CLOSE_MODAL :
            return {
                duckText: '',
                isOpen: false,
            }
        case UPDATE_DUCK_TEXT :
            return {
                ...state,
                duckText: action.newDuckText,
            }
        default :
            return state
    }
}