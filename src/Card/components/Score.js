import { React } from 'react';
import './Score.css'

const Score = (props) => {

  return (
    <div className="score">
        {props.children}
    </div>
  )
}

export default Score