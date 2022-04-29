import { ADD_COMMENT, DELETE_COMMENT, SET_POST_COMMENTS } from "../types/commentType"


export const setPostComments = (allComments) => ({
	type: SET_POST_COMMENTS,
	payload: allComments
})

export const setPostCommentsQuery = (  _id, token) => async (dispatch) => {

	const response = await fetch(`https://api.react-learning.ru/posts/comments/${_id}`, {
		method: "GET",		
		headers: {
			authorization: `Bearer ${token}`,
			'Content-Type': 'application/json' 
		},
			
	})

	const commentsFromApi = await response.json()

	dispatch(setPostComments(commentsFromApi))
}


export const addComment = (allComments) => ({
	type: ADD_COMMENT , 
	payload: allComments
})

export const addCommentQuery = (_id, token, comments) => async (dispatch) => {

	await fetch(`https://api.react-learning.ru/posts/comments/${_id}`, {
		method: "POST",
		headers: {
			authorization: `Bearer ${token}`,
			'Content-Type': 'application/json' 
		},
		body: comments
	})
	
const response = await fetch(`https://api.react-learning.ru/posts/comments/${_id}`, {
		method: "GET",		
		headers: {
			authorization: `Bearer ${token}`,
			'Content-Type': 'application/json' 
		},
			
	})
	
	if (response.status === 200) {
		
		const postFromApi = await response.json()
		dispatch(addComment(postFromApi))
		
		}
		else {
			alert("Нельзя отправлять пустой коммент")
		}
	}

	export const deleteComment = (_id) => ({
		type: DELETE_COMMENT,
		payload: _id
	})
	export const deleteCommentQuery = (_id,  commentId, token,) => async (dispatch) =>{
		
		const response= await fetch(`https://api.react-learning.ru/posts/comments/${_id}/${commentId}`, {
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${token}`
			} ,		
		})	
		if(response.status === 200) {		
			dispatch(deleteComment(commentId))
		}else{
			alert("Вы удаляете не свой комментарий")
		}
	}
