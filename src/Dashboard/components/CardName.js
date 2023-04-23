import React from 'react'
import './CardName.css'
import { useNavigate } from 'react-router-dom'

const CardName = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/game?cardType=${props.cardType}`);
  }
  return (
    <div className="card-block" onClick={handleClick}>
      <div className="image-block">
        <img className='image-block-details' src={props.imageUrl} alt={props.cardType} />
      </div>
      <div className="card-name">
        <div className="card-name-text">{props.cardType}</div>
      </div>
      <div className="card-btns">
        <button>Remove</button>
      </div>
    </div>
  )
}

export default CardName;