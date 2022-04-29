import { GET_POST, UPDATE_POST } from "../types/postsTypes"


export const getPost = (post) => ({
	type: GET_POST,
	payload: post
})

export const getPostQuery = (  token, _id, controllerForApi) => async (dispatch) => {

	const response = await fetch(`https://api.react-learning.ru/posts/${_id}`, {
		method: "GET",
		signal: controllerForApi,
		headers: {
			authorization: `Bearer ${token}`,
			'Content-Type': 'application/json' 
		},
			
	})

	const postFromApi = await response.json()

	dispatch(getPost(postFromApi))
}


export const updatePost = (createPost) => ({
	type: UPDATE_POST,
	payload: createPost,
}) 

export const updatePostQuery = ( preparedPostQuery, token, _id) => async (dispatch) => {

	const response = await fetch(`https://api.react-learning.ru/posts/${_id}`, {
		method: "PATCH",
		headers: {
			authorization: `Bearer ${token}`,
			'Content-Type': 'application/json' 
		},
	   body: preparedPostQuery
	   
	})

	if (response.status === 200) {
		
	const postFromApi = await response.json()
	
	dispatch(updatePost(postFromApi))
	
	}
	else {alert("Нельзя редактировать чужой пост")}

}