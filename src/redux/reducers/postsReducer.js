import {SET_ALL_POSTS, ADD_NEW_POST, DELETE_POST, LIKE_POST } from '../types/postsTypes'


const postsReducer = (state = [], action) => {

	switch (action.type) {
		case SET_ALL_POSTS:
			return action.payload
		
		case ADD_NEW_POST: 
			return [
				...state,
				action.payload
			]
		case DELETE_POST:
			return state.filter((post) => post._id !== action.payload)
			
		case LIKE_POST:
			return state.map((post) => {
				if(post._id === action.payload._id) return action.payload
				return post
			})
		
		
	
		default:
			return state
	}
}

export default postsReducer