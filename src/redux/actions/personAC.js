import axios from "axios";
import { axiosInstance } from "../../config/axios";
import { GET_PERSON, SIGN_IN } from "../types/personType";

export const signIn = (person) => ({
    type: SIGN_IN,
    payload: person,
});

export const signInQuery =
    ({ email, password, cb }) =>
        async (dispatch) => {
            const response = await axiosInstance.post("signin", {
                email,
                password,
            }, );

            const person = response.data;

            dispatch(
                signIn({
                    ...person.data,
                    token: person.token,
             
                })            
            );

            typeof cb === 'function' && cb();
        };

        // Получаем пользователя с сервера 
export const getPerson = (token, person) => ({
    type: GET_PERSON,
    payload: {
        ...person,
        token
    }
})

export const getPersonQuery = (token) => async (dispatch) => {
    const response = await axios.get(
        'users/me',{
        headers: {
			authorization: `Bearer ${token}` 
		}})
        const personFromApi = await response.data
        dispatch(getPerson(personFromApi, token))
    }