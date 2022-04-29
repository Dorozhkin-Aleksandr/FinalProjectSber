import { GET_PERSON, SIGN_IN, SIGN_UP, LOG_OUT, EDIT_PROF} from '../types/personType'

export const personReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                ...action.payload,
            }
        case GET_PERSON:
            return {
                ...state,
                ...action.payload,
            }
            case SIGN_UP:
                return {
                    ...state,
                    ...action.payload
            }
            case LOG_OUT:
                return {
                    ...state,
                    token: action.payload,
                    avatar: action.payload
                }
            case EDIT_PROF:
                 return {
                    ...state,
                    ...action.payload
                    }
        
    

        default:
            return state
    }
}