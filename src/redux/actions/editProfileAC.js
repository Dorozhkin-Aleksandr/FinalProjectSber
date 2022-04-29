// import { useSelector } from "react-redux";
import { axiosInstance } from "../../config/axios";
import { EDIT_PROF } from "../types/personType";


export const editProfile = (person) => ({
    type: EDIT_PROF,
    payload: person,
});

export const EditProfileQuery =
    ({ name, about, successCb, errorCb, token }) =>
        async (dispatch) => {
            try {
                const response = await axiosInstance.patch("users/me", {
                    name: name,
                    about: about,
                },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `Bearer ${token}`
                        },
                    }
                );

                const person = response.data;

                dispatch(
                    editProfile({
                        ...person.data,
                        name: person.name,
                        about: person.about,
                        cb: successCb
                    })
                );

                window.alert("Данные пользователя успешно обновлены!")
                successCb()

            }
            catch (error) {
                console.dir(error.message)
                errorCb(error.message)

            }

        }
