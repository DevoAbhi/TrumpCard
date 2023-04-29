import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import Score from '../components/Score';
import GameSection from '../components/GameSection';
import { getCards } from '../../stateManager/action-creators';
import { updateScore } from '../../stateManager/action-creators';

import './Game.css';


const Game = () => {
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const playerCards = useSelector((state) => state.card);
    const playerScores = useSelector((state) => state.score);
    const location = useLocation();
    const cardType = new URLSearchParams(location.search).get('cardType');
    // const [loading, setLoading] = useState(true);
    // const [player1Deck, setPlayer1Deck] = useState([]);
    // const [player2Deck, setPlayer2Deck] = useState([]);

    useEffect(() => {
        dispatch(getCards(cardType))
        dispatch(updateScore("SET TO ZERO", 0));
    }, [dispatch, cardType])

    useEffect(() => {
        /* reason -> reason why we are setting the user again, because useState only sets the state only once during the first render of the component.
        now, suppose user has logged out, and another user has logged in. In that case, the user state will not change. In that case,
        we have to set user data to update.

        location reason -> if the user is in the same page, we will do nothing, but in expired state, if they go to any other page,
        then logout.
        */

        setUserData(JSON.parse(localStorage.getItem('profile')))
    }, [location]);



    const player1Deck = playerCards.player1Deck;
    const player2Deck = playerCards.player2Deck;

    const [player1ChosenCard, setPlayer1ChosenCard] = useState({});
    const [player2ChosenCard, setPlayer2ChosenCard] = useState({});
    const [margin, setMargin] = useState({ winner: "", score: 0 });

    return (
        <div className='game' >
            <div className="player1Area">
                {/* <PlayerDeck
                    isPlayer1={true}
                    setPlayer1ChosenCard={setPlayer1ChosenCard}
                    setPlayer2ChosenCard={setPlayer2ChosenCard}
                /> */}
                <div className="cards1">
                    {player1Deck.length > 0 && player1Deck.map(card => (
                        <Card
                            key={card?._id}
                            cardName={card.cardName}
                            imageUrl={card.imageUrl}
                            attributes={card.attributes}
                            card={card}
                            setPlayer1ChosenCard={setPlayer1ChosenCard}
                            setPlayer2ChosenCard={setPlayer2ChosenCard}
                            // setPlayer1Deck={setPlayer1Deck}
                            // setPlayer2Deck={setPlayer2Deck}
                            player1Deck={player1Deck}
                            player2Deck={player2Deck}
                            clickCard={true}
                        ></Card>
                    ))}


                </div>
                <div className="name1">{userData.user.username}</div>

                <Score>
                    Score : {playerScores.player1Score}
                </Score>

            </div>


            <GameSection
                player1ChosenCard={player1ChosenCard}
                player2ChosenCard={player2ChosenCard}
                setPlayer1ChosenCard={setPlayer1ChosenCard}
                setPlayer2ChosenCard={setPlayer2ChosenCard}
                player1={userData.user.username}
                player2="Computer"
                {...margin}
                setMargin={setMargin}
            ></GameSection>




            <div className="player2Area">
                {/* <PlayerDeck
                    isPlayer1={false}
                    setPlayer1ChosenCard={setPlayer1ChosenCard}
                    setPlayer2ChosenCard={setPlayer2ChosenCard}
                /> */}
                <div className="cards2">
                    {player1Deck.length > 0 && player2Deck.map(card => (
                        <Card
                            key={card?._id}
                            cardName={card.cardName}
                            imageUrl={card.imageUrl}
                            attributes={card.attributes}
                            card={card}
                            setPlayer1ChosenCard={setPlayer1ChosenCard}
                            setPlayer2ChosenCard={setPlayer2ChosenCard}
                            // setPlayer1Deck={setPlayer1Deck}
                            // setPlayer2Deck={setPlayer2Deck}
                            player1Deck={player1Deck}
                            player2Deck={player2Deck}
                            clickCard={false}
                        ></Card>
                    ))}
                </div>
                <div className="name2">Computer</div>
                <Score>
                    Score : {playerScores.player2Score}
                </Score>
            </div>
        </div>
    )
}

export default Game;