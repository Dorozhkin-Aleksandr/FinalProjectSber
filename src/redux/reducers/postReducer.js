import { GET_POST, UPDATE_POST } from "../types/postsTypes"

export const postReducer = (state = {}, action) => {

	switch (action.type) {
		case GET_POST:
			return action.payload
		
		case UPDATE_POST:			
			return action.payload
	
		default:
			return state
	}
}

