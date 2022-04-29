import { ADD_NEW_POST, DELETE_POST, SET_ALL_POSTS, LIKE_POST } from '../types/postsTypes'

export const setAllPosts = (allPosts) => ({
	type: SET_ALL_POSTS,
	payload: allPosts
})

export const loadAllPosts = (searchValue, token) => async (dispatch) => {
  const urlForFetch = searchValue
  ? `https://api.react-learning.ru/posts/search/?query=${searchValue}`
  : "https://api.react-learning.ru/posts";

	const response = await fetch(urlForFetch , {
		headers: {
			authorization: `Bearer ${token}` 
		}
	})


	const postsFromApi = await response.json()

	dispatch(setAllPosts(postsFromApi))

}


export const addNewPost = (allPosts) => ({
	type: ADD_NEW_POST,
	payload: allPosts
})

export const queryNewPost = (post, token) => async (dispatch) => {

	const response = await fetch('https://api.react-learning.ru/posts', {
		method: "POST",
		headers: {
			authorization: `Bearer ${token}`,
			'Content-Type': 'application/json' 
		},
		body: post
	})

	const postFromApi = await response.json()

	dispatch(addNewPost(postFromApi))

}

export const deletePost = (_id) => ({
	type: DELETE_POST,
	payload: _id
})
export const deletePostQuery = (_id, token) => async (dispatch) =>{
	
	const response= await fetch(`https://api.react-learning.ru/posts/${_id}`, {
		method: 'DELETE',
		headers: {
			authorization: `Bearer ${token}`
		} ,		
	})	
	if(response.status === 200) {		
		dispatch(deletePost(_id))
	}
}



