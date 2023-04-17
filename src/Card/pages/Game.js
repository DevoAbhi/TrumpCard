import { useLocation } from 'react-router-dom';
import Card from './Card';
import './Game.css';

const Game = () => {
    const location = useLocation();
    const cardType = new URLSearchParams(location.search).get('cardType');
    console.log(cardType);


    const player1Deck = [
        {
            "_id": ("643ab5612b863a1858059216"),
            "cardType": "pokemon",
            "cardName": "reshiram",
            "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
            "attributes": [
                {
                    "name": "hp",
                    "value": "100",
                    "_id": ("643ab5612b863a1858059217")
                },
                {
                    "name": "attack",
                    "value": "120",
                    "_id": ("643ab5612b863a1858059218")
                },
                {
                    "name": "defense",
                    "value": "100",
                    "_id": ("643ab5612b863a1858059219")
                },
                {
                    "name": "special-attack",
                    "value": "150",
                    "_id": ("643ab5612b863a185805921a")
                },
                {
                    "name": "special-defense",
                    "value": "120",
                    "_id": ("643ab5612b863a185805921b")
                },
                {
                    "name": "speed",
                    "value": "90",
                    "_id": ("643ab5612b863a185805921c")
                }
            ],
            "__v": (0)
        }

        , {
            "_id": ("643ab55f2b863a18580591fe"),
            "cardType": "pokemon",
            "cardName": "palkia",
            "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
            "attributes": [
                {
                    "name": "hp",
                    "value": "90",
                    "_id": ("643ab55f2b863a18580591ff")
                },
                {
                    "name": "attack",
                    "value": "120",
                    "_id": ("643ab55f2b863a1858059200")
                },
                {
                    "name": "defense",
                    "value": "100",
                    "_id": ("643ab55f2b863a1858059201")
                },
                {
                    "name": "special-attack",
                    "value": "150",
                    "_id": ("643ab55f2b863a1858059202")
                },
                {
                    "name": "special-defense",
                    "value": "120",
                    "_id": ("643ab55f2b863a1858059203")
                },
                {
                    "name": "speed",
                    "value": "100",
                    "_id": ("643ab55f2b863a1858059204")
                }
            ],
            "__v": (0)
        }
    ]

    const player2Deck = [
        {
            "_id": ("643ab5572b863a18580590c6"),
            "cardType": "pokemon",
            "cardName": "blastoise",
            "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
            "attributes": [
                {
                    "name": "hp",
                    "value": "79",
                    "_id": ("643ab5572b863a18580590c7")
                },
                {
                    "name": "attack",
                    "value": "83",
                    "_id": ("643ab5572b863a18580590c8")
                },
                {
                    "name": "defense",
                    "value": "100",
                    "_id": ("643ab5572b863a18580590c9")
                },
                {
                    "name": "special-attack",
                    "value": "85",
                    "_id": ("643ab5572b863a18580590ca")
                },
                {
                    "name": "special-defense",
                    "value": "105",
                    "_id": ("643ab5572b863a18580590cb")
                },
                {
                    "name": "speed",
                    "value": "78",
                    "_id": ("643ab5572b863a18580590cc")
                }
            ],
            "__v": (0)
        }

        , {
            "cardType": "pokemon",
            "cardName": "mewtwo",
            "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
            "attributes": [
                {
                    "name": "hp",
                    "value": "106",
                    "_id": ("643ab5572b863a18580590bf")
                },
                {
                    "name": "attack",
                    "value": "110",
                    "_id": ("643ab5572b863a18580590c0")
                },
                {
                    "name": "defense",
                    "value": "90",
                    "_id": ("643ab5572b863a18580590c1")
                },
                {
                    "name": "special-attack",
                    "value": "154",
                    "_id": ("643ab5572b863a18580590c2")
                },
                {
                    "name": "special-def",
                    "value": "90",
                    "_id": ("643ab5572b863a18580590c3")
                },
                {
                    "name": "speed",
                    "value": "130",
                    "_id": ("643ab5572b863a18580590c4")
                }
            ],
            "__v": 0
        }
    ]

    return (
        <div className='game'>
            <div className="player1Area">
                <div className="cards1">
                    {player1Deck.map(card => (
                        <Card
                            name={card.name}
                            imageUrl={card.imageUrl}

                        ></Card>
                    ))}
                </div>
                <div className="name1">Abhinab</div>
            </div>
            <div className="gameArea"></div>
            <div className="player2Area">
                <div className="cards2">
                    {player2Deck.map(card => (
                        <Card
                            name={card.name}
                            imageUrl={card.imageUrl}

                        ></Card>
                    ))}
                </div>
                <div className="name2">Computer</div>
            </div>
        </div>
    )
}

export default Game;