// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <h2 className="home-title">Welcome to the Trump Card Game!</h2>
//       <p className="home-description">Click the button below to start playing.</p>
//       <Link to="/cards">
//         <button className="home-button">Start Game</button>
//       </Link>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import './Home.css';

const PokemonCard = ({ name, image, description, hp, attack, defense, specialAttack, specialDefense, speed }) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-card-image-container">
        <img className="pokemon-card-image" src={image} alt={name} />
        <div className="pokemon-card-description">Lorem ipsum dolor sit amet</div>
      </div>
      <div className="pokemon-card-details">
        <h2 className="pokemon-card-name">ABhinab</h2>
        <div className="pokemon-card-attributes-container">
          <div className="pokemon-card-attributes-column">
            <div className="pokemon-card-attribute">
              <div className="pokemon-card-attribute-name">HP:</div>
              <div className="pokemon-card-attribute-value">20</div>
            </div>
            <div className="pokemon-card-attribute">
              <div className="pokemon-card-attribute-name">Attack:</div>
              <div className="pokemon-card-attribute-value">20</div>
            </div>
            <div className="pokemon-card-attribute">
              <div className="pokemon-card-attribute-name">Defense:</div>
              <div className="pokemon-card-attribute-value">20</div>
            </div>
          </div>
          <div className="pokemon-card-attributes-column">
            <div className="pokemon-card-attribute">
              <div className="pokemon-card-attribute-name">Special Attack:</div>
              <div className="pokemon-card-attribute-value">20</div>
            </div>
            <div className="pokemon-card-attribute">
              <div className="pokemon-card-attribute-name">Special:</div>
              <div className="pokemon-card-attribute-value">20</div>
            </div>
            <div className="pokemon-card-attribute">
              <div className="pokemon-card-attribute-name">Speed:</div>
              <div className="pokemon-card-attribute-value">20</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
