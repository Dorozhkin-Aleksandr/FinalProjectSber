import { axiosInstance } from "../../config/axios";
import { signInQuery } from "./personAC";

export const signUpQuery =
    ({ email, password, successCb, errorCb }) =>

        async (dispatch) => {
            try {
                const response = await axiosInstance.post("signup", {
                    email,
                    password,
                });
               
                if (response.status === 201) {

                    dispatch(
                        signInQuery({ email, password, cb: successCb })
                    );


                }

            } catch (error) {
                console.dir(error.message)
                errorCb(error.message)

            }

        };
