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

export const logoutUser = (navigate) => (dispatch) => {
    try {
        dispatch({
            type: "LOGOUT"
        })

        navigate("/auth");
    }

    catch (error) {

    }
}

export const getCards = (cardType) => async (dispatch) => {
    try {
        const {data} = await api.getCards(cardType);
        console.log("data => ", data);

        dispatch({
            type: "GET CARDS",
            payload: data
        })
    }

    catch (error) {
        console.log("Error while getting the cards -> ", error);
    }
}

export const removeCardFromDeck = (P1cardId, P2cardId) => async (dispatch) => {
    try {
        dispatch({
            type: "REMOVE CARD FROM DECK",
            payload: {P1cardId, P2cardId}
        })
    }

    catch (error) {
        console.log("Error while getting the cards -> ", error);
    }
}

export const updateScore = (winner, score) => (dispatch) => {
    try {
        dispatch({
            type: winner,
            payload: {score}
        })
    } catch (error) {
        console.log("Error while updating the score -> ", error);
    }
}