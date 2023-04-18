import React from 'react';
import Card from '../pages/Card';

import './GameSection.css';

function GameSection(props) {

    const handleChosenCards = () => {
        const attributesLen = props.player1ChosenCard.attributes.length;
        const randomAttributeIdx = Math.floor(Math.random() * attributesLen);
        const randomAttributeP1 = props.player1ChosenCard.attributes[randomAttributeIdx];
        const randomAttributeP2 = props.player2ChosenCard.attributes[randomAttributeIdx];

        console.log("randomAttributeP1 => ", randomAttributeP1);
        console.log("randomAttributeP2 => ", randomAttributeP2);

        if(randomAttributeP1.value > randomAttributeP2.value) {
            console.log("randomAttributeP1.value => ", randomAttributeP1.value);
            console.log("randomAttributeP2.value => ", randomAttributeP2.value);
            console.log("Player 1 won this round!")
        }
        else if(randomAttributeP2.value > randomAttributeP1.value) {
            console.log("randomAttributeP1.value => ", randomAttributeP1.value);
            console.log("randomAttributeP2.value => ", randomAttributeP2.value);
            console.log("Player 2 won this round!")
        }
        else {
            console.log("Tie!");
        }

        props.setPlayer1ChosenCard({});
        props.setPlayer2ChosenCard({});

    }
    return (
        <div className="gameArea">
            <div className="chosenCards">
                <div className="player1card">
                    {(Object.keys(props.player1ChosenCard).length !== 0) ?
                        <Card
                            key={props.player1ChosenCard._id}
                            cardName={props.player1ChosenCard.cardName}
                            imageUrl={props.player1ChosenCard.imageUrl}
                            attributes={props.player1ChosenCard.attributes}
                            clickCard={false}
                        ></Card>
                        : ""}
                </div>
                <div className="player2card">
                    {(Object.keys(props.player2ChosenCard).length !== 0) ?
                        <Card
                            key={props.player2ChosenCard._id}
                            cardName={props.player2ChosenCard.cardName}
                            imageUrl={props.player2ChosenCard.imageUrl}
                            attributes={props.player2ChosenCard.attributes}
                            clickCard={false}
                        ></Card>
                        : ""}
                </div>

            </div>
            {(Object.keys(props.player1ChosenCard).length !== 0)?
                <button className="compareBtn" onClick={handleChosenCards}>Compare</button>
                : ""
            }

        </div>
    )
}

export default GameSection