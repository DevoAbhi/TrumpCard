import React, {useState} from 'react';
import Card from '../pages/Card';
import Modal from './Modal';

import './GameSection.css';
import Button from './Button';


function GameSection(props) {

    const [winner, setWinner] = useState({});
    const [loser, setLoser] = useState({});
    const [attributeChosen, setAttributeChosen] = useState({});
    const [isTie, setIsTie] = useState(false);
    const [margin, setMargin] = useState({});
    const [showModal, setShowModal] = useState(false);




    const handleChosenCards = () => {
        const attributesLen = props.player1ChosenCard.attributes.length;
        const randomAttributeIdx = Math.floor(Math.random() * attributesLen);
        const randomAttributeP1 = props.player1ChosenCard.attributes[randomAttributeIdx];
        const randomAttributeP2 = props.player2ChosenCard.attributes[randomAttributeIdx];

        setAttributeChosen(randomAttributeP1.name);

        if(parseInt(randomAttributeP1.value, 10) > parseInt(randomAttributeP2.value, 10)) {
            //Player 1 won
            setWinner({...props.player1ChosenCard, name: props.player1});
            setLoser({...props.player2ChosenCard, name: props.player2});
            // setWinner(props.player1ChosenCard);
            // setLoser(props.player2ChosenCard);
            const diff = randomAttributeP1.value - randomAttributeP2.value;
            setMargin(diff);
        }
        else if(parseInt(randomAttributeP2.value, 10) > parseInt(randomAttributeP1.value, 10)) {
            //Player 2 won
            setWinner({...props.player2ChosenCard, name: props.player2});
            setLoser({...props.player1ChosenCard, name: props.player1});
            // setWinner(props.player2ChosenCard);
            // setLoser(props.player1ChosenCard);
            const diff = randomAttributeP2.value - randomAttributeP1.value;
            setMargin(diff);
        }
        else {
            // Tie
            setIsTie(true);
            setWinner({...props.player2ChosenCard, name: props.player2});
            setLoser({...props.player1ChosenCard, name: props.player1});
        }

        props.setPlayer1ChosenCard({});
        props.setPlayer2ChosenCard({});
        setShowModal(true);

    }
    return (
        <div className="gameArea">
            {showModal && <Modal
                isTie={isTie}
                attributeChosen={attributeChosen}
                winner={winner}
                loser={loser}
                margin={margin}
                setShowModal={setShowModal}
            ></Modal>}



            <div className="chosenCards">
                {(Object.keys(props.player1ChosenCard).length === 0) && <Button button={false}>Choose a Card!</Button>}
                <div className="player1card">
                    {(Object.keys(props.player1ChosenCard).length !== 0) ?
                        <Card
                            key={props.player1ChosenCard?._id}
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
                            key={props.player2ChosenCard?._id}
                            cardName={props.player2ChosenCard.cardName}
                            imageUrl={props.player2ChosenCard.imageUrl}
                            attributes={props.player2ChosenCard.attributes}
                            clickCard={false}
                        ></Card>
                        : ""}
                </div>

            </div>
            {(Object.keys(props.player1ChosenCard).length !== 0)?
                <div className="compareBtn" onClick={handleChosenCards}>Compare</div>
                // <Button button={true} onClick={handleChosenCards}>Compare</Button>
                : ""
            }

        </div>
    )
}

export default GameSection