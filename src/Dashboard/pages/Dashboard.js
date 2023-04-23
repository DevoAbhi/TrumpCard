import React, { useEffect } from 'react';
import CardName from '../components/CardName';
import './Dashboard.css'

const Dashboard = () => {

  const userData = JSON.parse(localStorage.getItem('profile'));
  const images = {
    "pokemon": "https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png",
    "avengers": "https://1000logos.net/wp-content/uploads/2019/05/Avengers-Logo-2012.png"
  }


  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className='dashboard-title'>
          {userData.user.username}'s Card collection
        </div>
        <div className='dashboard-subtitle'>
          Choose any card to play!
        </div>
      </div>

      <div className="card-collection">
        
        {userData.user.cardCollection.map(card => {
          const cardType = card.cardType;

          return <CardName
            key={card?._id}
            cardType={cardType}
            imageUrl={images[cardType]}
          />
        })}
      </div>

    </div>
  )
}

export default Dashboard