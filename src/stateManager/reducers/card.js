const cardReducer = (state = { player1Deck: [], player2Deck: [] }, action) => {
    switch (action.type) {
        case "GET CARDS":

            return {
                ...state,
                player1Deck: action.payload.player1Deck,
                player2Deck: action.payload.player2Deck,
                message: action?.payload?.message,
                success: action?.payload?.success
            }

        case "REMOVE CARD FROM DECK":
            const filterP1Cards = state.player1Deck.filter(card => card?._id !== action.payload.P1cardId);
            const filterP2Cards = state.player2Deck.filter(card => card?._id !== action.payload.P2cardId);

            return {
                ...state,
                player1Deck: filterP1Cards,
                player2Deck: filterP2Cards
            }

        default:
            return state;
    }
}

export default cardReducer;