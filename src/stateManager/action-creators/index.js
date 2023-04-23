import * as api from '../../api/index.js';

/* basic syntax is ->
    action function which returns a function which takes dispatch as arg.
    now dispatch the type and payload
    easy.
*/


export const signupUser = (formData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.signup(formData);

        dispatch({
            type: "AUTH",
            payload: data
        })

        navigate("/dashboard");
    }

    catch (error) {
        console.log("Error while signing up -> ", error);
    }
}

export const loginUser = (formData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.login(formData);
        console.log(data);

        dispatch({
            type: "AUTH",
            payload: data
        })

        navigate("/dashboard");
    }

    catch (error) {
        console.log("Error while logging in -> ", error);
    }
}