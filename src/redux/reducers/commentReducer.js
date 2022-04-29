import { ADD_COMMENT, DELETE_COMMENT, SET_POST_COMMENTS } from "../types/commentType"

export const commentReducer = (state = [], action) => {

	switch (action.type) {
		case ADD_COMMENT:			
		return 			action.payload
			

        case SET_POST_COMMENTS:
           return    action.payload
		
			
        case DELETE_COMMENT:
            return state.filter((comment) => comment._id !== action.payload)
		
	
	
		default:
			return state
	}
}

