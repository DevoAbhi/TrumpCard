import React from 'react'
import './Modal.css'

function Modal(props) {
    return (
        <div className="modal">
            <div className="modal-content">
            <span className="close">
              &times;
            </span>
                <div className="attribute-chosen">
                    <span className='attribute-chosen-name'>{props.attributeChosen}</span> was the atribute chosen.
                </div>
                <div className="winner">
                    <span className='winner-name'>{props.winner}</span> has won this round!
                </div>
                <div className="reason">
                <span className='winner-name'>{props.winner}</span> has won by a margin of <span className='margin'>{props.margin}</span>!
                <div className='both-values'>
                    <span className='value1'>{props.winner} = {props.winnerValue}</span>
                    <span className='value2'>{props.loser} = {props.loserValue}</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal