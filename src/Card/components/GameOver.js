import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateScore } from '../../stateManager/action-creators';
import "./GameOver.css"

const GameOver = (props) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const playerScores = useSelector((state) => state.score);
  const player1Score = playerScores.player1Score;
  const player2Score = playerScores.player2Score;

  const continueHandler = () => {
    dispatch(updateScore("SET TO ZERO", 0));
    navigate("/dashboard");

  }

  return (
    <div className="game-over">
      <span>Game Over! 🎮❌</span>

      {(player1Score === player2Score) ?
        <div className="tie-game">Tie! 💔</div>
        :
        (player1Score > player2Score) ?
          <div className="final-winner">{props.winner.name} Won! 🥇</div>
          :
          <div className="final-winner">{props.winner.name} Lost! 🥈</div>
      }

      <div className="continue" onClick={continueHandler}>Continue Playing?</div>
    </div>

  )
}

export default GameOver;