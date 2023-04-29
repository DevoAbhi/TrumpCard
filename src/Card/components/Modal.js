import React from 'react'
import './Modal.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import GameOver from './GameOver';

function Modal(props) {
    const [gameOver, setGameOver] = useState(false);
    const playerCards = useSelector((state) => state.card);
    const handleCloseModal = () => {
        props.setShowModal(false);
        props.setIsTie(false);

        if (playerCards.player1Deck.length === 0) {
            props.setShowModal(true);
            setGameOver(true);
        }
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>
                    &times;
                </span>
                {gameOver ?
                    <GameOver winner={props.winner}/>
                    :
                    <>
                        {props.isTie ?
                            <div className="is-tie">
                                <div className='tie-text'>It's a Tie!</div>
                            </div> :
                            <div className="hero-content">
                                <div className="attribute-chosen">
                                    <span className='attribute-chosen-name'>{props.attributeChosen}</span> was the atribute chosen.
                                </div>
                                <div className="winner">
                                    {/* <span className='winner-name'>Abhinab</span> has won this round! */}
                                    <span className='winner-name'>{props.winner.name}</span> has won this round!
                                </div>
                            </div>
                        }

                        <button className="closeBtn" onClick={handleCloseModal}>Continue</button>

                        <div className="reason">
                            {!props.isTie &&
                                <div className="winner-margin">
                                    {/* <span className='winner-name'>Abhinab</span> has won by a margin of <span className='margin'>{props.margin}</span>! */}
                                    <span className='winner-name'>{props.winner.name}</span> has won by a margin of <span className='margin'>{props.margin}</span>!
                                </div>
                            }

                            {/* <span className='winner-name'>{props.winner.name}</span> has won by a margin of <span className='margin'>{props.margin}</span>! */}
                            <div className='both-values'>
                                {/* <span className='value1'>Abhinab = {props.winner.attributes.find(attribute => attribute.name === props.attributeChosen)?.value} </span> */}
                                <span className='value1'>{props.winner.name} = {props.winner.attributes.find(attribute => attribute.name === props.attributeChosen)?.value} </span>
                                {/* <span className='value2'>Abhinab = {props.loser.attributes.find(attribute => attribute.name === props.attributeChosen)?.value}</span> */}
                                <span className='value2'>{props.loser.name} = {props.loser.attributes.find(attribute => attribute.name === props.attributeChosen)?.value}</span>
                            </div>
                        </div>
                    </>
                }

            </div>
        </div>
    )
}

export default Modal