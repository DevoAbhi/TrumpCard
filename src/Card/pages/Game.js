import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import GameSection from '../components/GameSection';
import { getCards } from '../../stateManager/action-creators';
// const player1DeckCards = [
//     // {
//     //     "_id" : ("643aee2483e91332c703146b"),
//     //     "cardType" : "avengers",
//     //     "cardName" : "thor",
//     //     "imageUrl" : "https://www.superherodb.com/pictures2/portraits/10/100/727.jpg",
//     //     "attributes" : [
//     //         {
//     //             "name" : "intelligence",
//     //             "value" : "100",
//     //             "_id" : ("643aee2483e91332c703146c")
//     //         },
//     //         {
//     //             "name" : "strength",
//     //             "value" : "53",
//     //             "_id" : ("643aee2483e91332c703146d")
//     //         },
//     //         {
//     //             "name" : "speed",
//     //             "value" : "25",
//     //             "_id" : ("643aee2483e91332c703146e")
//     //         },
//     //         {
//     //             "name" : "durability",
//     //             "value" : "65",
//     //             "_id" : ("643aee2483e91332c703146f")
//     //         },
//     //         {
//     //             "name" : "power",
//     //             "value" : "68",
//     //             "_id" : ("643aee2483e91332c7031470")
//     //         },
//     //         {
//     //             "name" : "combat",
//     //             "value" : "70",
//     //             "_id" : ("643aee2483e91332c7031471")
//     //         }
//     //     ],
//     //     "__v" : (0)
//     // }

//     {
//         "_id": "643ab5612b863a1858059216",
//         "cardType": "pokemon",
//         "cardName": "reshiram",
//         "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
//         "attributes": [
//             {
//                 "name": "hp",
//                 "value": "100",
//                 "_id": ("643ab5612b863a1858059217")
//             },
//             {
//                 "name": "attack",
//                 "value": "120",
//                 "_id": ("643ab5612b863a1858059218")
//             },
//             {
//                 "name": "defense",
//                 "value": "100",
//                 "_id": ("643ab5612b863a1858059219")
//             },
//             {
//                 "name": "special-attack",
//                 "value": "150",
//                 "_id": ("643ab5612b863a185805921a")
//             },
//             {
//                 "name": "special-defense",
//                 "value": "120",
//                 "_id": ("643ab5612b863a185805921b")
//             },
//             {
//                 "name": "speed",
//                 "value": "90",
//                 "_id": ("643ab5612b863a185805921c")
//             }
//         ],
//         "__v": (0)
//     }

//     , {
//         "_id": "643ab55f2b863a18580591fe",
//         "cardType": "pokemon",
//         "cardName": "palkia",
//         "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
//         "attributes": [
//             {
//                 "name": "hp",
//                 "value": "90",
//                 "_id": ("643ab55f2b863a18580591ff")
//             },
//             {
//                 "name": "attack",
//                 "value": "120",
//                 "_id": ("643ab55f2b863a1858059200")
//             },
//             {
//                 "name": "defense",
//                 "value": "100",
//                 "_id": ("643ab55f2b863a1858059201")
//             },
//             {
//                 "name": "special-attack",
//                 "value": "150",
//                 "_id": ("643ab55f2b863a1858059202")
//             },
//             {
//                 "name": "special-defense",
//                 "value": "120",
//                 "_id": ("643ab55f2b863a1858059203")
//             },
//             {
//                 "name": "speed",
//                 "value": "100",
//                 "_id": ("643ab55f2b863a1858059204")
//             }
//         ],
//         "__v": (0)
//     }
// ]

// const player2DeckCards = [
//     {
//         "_id": "643ab5572b863a18580590c6",
//         "cardType": "pokemon",
//         "cardName": "blastoise",
//         "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
//         "attributes": [
//             {
//                 "name": "hp",
//                 "value": "79",
//                 "_id": ("643ab5572b863a18580590c7")
//             },
//             {
//                 "name": "attack",
//                 "value": "83",
//                 "_id": ("643ab5572b863a18580590c8")
//             },
//             {
//                 "name": "defense",
//                 "value": "100",
//                 "_id": ("643ab5572b863a18580590c9")
//             },
//             {
//                 "name": "special-attack",
//                 "value": "85",
//                 "_id": ("643ab5572b863a18580590ca")
//             },
//             {
//                 "name": "special-defense",
//                 "value": "105",
//                 "_id": ("643ab5572b863a18580590cb")
//             },
//             {
//                 "name": "speed",
//                 "value": "78",
//                 "_id": ("643ab5572b863a18580590cc")
//             }
//         ],
//         "__v": (0)
//     }

//     , {
//         "_id": "643ab5572b863a18580590c8",
//         "cardType": "pokemon",
//         "cardName": "mewtwo",
//         "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
//         "attributes": [
//             {
//                 "name": "hp",
//                 "value": "106",
//                 "_id": ("643ab5572b863a18580590bf")
//             },
//             {
//                 "name": "attack",
//                 "value": "110",
//                 "_id": ("643ab5572b863a18580590c0")
//             },
//             {
//                 "name": "defense",
//                 "value": "90",
//                 "_id": ("643ab5572b863a18580590c1")
//             },
//             {
//                 "name": "special-attack",
//                 "value": "154",
//                 "_id": ("643ab5572b863a18580590c2")
//             },
//             {
//                 "name": "special-def",
//                 "value": "90",
//                 "_id": ("643ab5572b863a18580590c3")
//             },
//             {
//                 "name": "speed",
//                 "value": "130",
//                 "_id": ("643ab5572b863a18580590c4")
//             }
//         ],
//         "__v": 0
//     }
// ]


import './Game.css';


const Game = () => {
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const playerCards = useSelector((state) => state.card);
    const location = useLocation();
    const cardType = new URLSearchParams(location.search).get('cardType');
    // const [loading, setLoading] = useState(true);
    // const [player1Deck, setPlayer1Deck] = useState([]);
    // const [player2Deck, setPlayer2Deck] = useState([]);

    useEffect(() => {
        dispatch(getCards(cardType))
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

    // useEffect(() => {
    //     setPlayer1Deck(playerCards.player1Deck);
    //     setPlayer2Deck(playerCards.player2Deck);

    // }, [playerCards])

    const player1Deck = playerCards.player1Deck;
    const player2Deck = playerCards.player2Deck;

    const [player1ChosenCard, setPlayer1ChosenCard] = useState({});
    const [player2ChosenCard, setPlayer2ChosenCard] = useState({});
    // const [player1Deck, setPlayer1Deck] = useState(playerCards.player1Deck);
    // const [player2Deck, setPlayer2Deck] = useState(playerCards.player2Deck);


    // if(loading){
    //     return <div>loading...</div>
    // }

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

            </div>


            <GameSection
                player1ChosenCard={player1ChosenCard}
                player2ChosenCard={player2ChosenCard}
                setPlayer1ChosenCard={setPlayer1ChosenCard}
                setPlayer2ChosenCard={setPlayer2ChosenCard}
                player1 = {userData.user.username}
                player2 = "Computer"
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
            </div>
        </div>
    )
}

export default Game;