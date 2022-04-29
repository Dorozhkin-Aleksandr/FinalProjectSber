import { LIKE_POST } from "../types/postsTypes"

export const setLike = (_id) => ({
    type: LIKE_POST,
    payload: _id,
})

export const setLikeQuery = (_id, token) => async (dispatch) => {
    const response = await fetch(`https://api.react-learning.ru/posts/likes/${_id}`, {
		method: "PUT",
		headers: {
			authorization: `Bearer ${token}`,
			'Content-Type': 'application/json' 
		},
	})

	const postFromApi = await response.json()

	dispatch(setLike(postFromApi))
}



export const deleteLike = (postFromApi) => ({
    type: LIKE_POST,
    payload: postFromApi,
})

export const deleteLikeQuery = (_id, token) => async (dispatch) => {
    const response = await fetch(`https://api.react-learning.ru/posts/likes/${_id}`, {
		method: "DELETE",
		headers: {
			authorization: `Bearer ${token}`,
			'Content-Type': 'application/json' 
		},
	})

	const postFromApi = await response.json()
	dispatch(deleteLike(postFromApi))
}

