import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { updateScore } from '../../stateManager/action-creators';
import Card from '../pages/Card';
import Modal from './Modal';

import './GameSection.css';
import Button from './Button';


function GameSection(props) {

    const dispatch = useDispatch();

    const [winner, setWinner] = useState({});
    const [loser, setLoser] = useState({});
    const [attributeChosen, setAttributeChosen] = useState({});
    const [isTie, setIsTie] = useState(false);

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
            const diff = randomAttributeP1.value - randomAttributeP2.value;
            props.setMargin({winner: "Player1", score: diff});

            dispatch(updateScore("PLAYER 1", diff));

        }
        else if(parseInt(randomAttributeP2.value, 10) > parseInt(randomAttributeP1.value, 10)) {
            //Player 2 won
            setWinner({...props.player2ChosenCard, name: props.player2});
            setLoser({...props.player1ChosenCard, name: props.player1});
            const diff = randomAttributeP2.value - randomAttributeP1.value;
            props.setMargin({winner: "Player2", score: diff});

            dispatch(updateScore("PLAYER 2", diff));
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
                setIsTie={setIsTie}
                attributeChosen={attributeChosen}
                winner={winner}
                loser={loser}
                margin={props.score}
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