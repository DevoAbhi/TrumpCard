const scoreReducer = (state = { player1Score: 0, player2Score: 0 }, action) => {
    switch (action.type) {
        case "PLAYER 1":
            let newPlayer1Score = state.player1Score + action.payload.score;

            return { ...state, player1Score: newPlayer1Score }

        case "PLAYER 2":
            let newPlayer2Score = state.player2Score + action.payload.score;

            return { ...state, player2Score: newPlayer2Score }

        case "SET TO ZERO":
            return {...state, player1Score: 0, player2Score: 0}

        default:
            return state;
    }
}

export default scoreReducer;

