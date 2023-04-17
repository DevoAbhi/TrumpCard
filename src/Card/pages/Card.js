import React from "react";
import "../pages/Card.css";

const Card = (props) => {

    const cards = [{
        "_id" : ("643ab55f2b863a18580591fe"),
        "cardType" : "pokemon",
        "cardName" : "palkia",
        "imageUrl" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
        "attributes" : [
            {
                "name" : "hp",
                "value" : "90",
                "_id" : ("643ab55f2b863a18580591ff")
            },
            {
                "name" : "attack",
                "value" : "120",
                "_id" : ("643ab55f2b863a1858059200")
            },
            {
                "name" : "defense",
                "value" : "100",
                "_id" : ("643ab55f2b863a1858059201")
            },
            {
                "name" : "special-attack",
                "value" : "150",
                "_id" : ("643ab55f2b863a1858059202")
            },
            {
                "name" : "special-defense",
                "value" : "120",
                "_id" : ("643ab55f2b863a1858059203")
            },
            {
                "name" : "speed",
                "value" : "100",
                "_id" : ("643ab55f2b863a1858059204")
            }
        ],
        "__v" : (0)
    }

        ,{
        "_id" : ("643ab5572b863a18580590c6"),
        "cardType" : "pokemon",
        "cardName" : "blastoise",
        "imageUrl" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        "attributes" : [
            {
                "name" : "hp",
                "value" : "79",
                "_id" : ("643ab5572b863a18580590c7")
            },
            {
                "name" : "attack",
                "value" : "83",
                "_id" : ("643ab5572b863a18580590c8")
            },
            {
                "name" : "defense",
                "value" : "100",
                "_id" : ("643ab5572b863a18580590c9")
            },
            {
                "name" : "special-attack",
                "value" : "85",
                "_id" : ("643ab5572b863a18580590ca")
            },
            {
                "name" : "special-defense",
                "value" : "105",
                "_id" : ("643ab5572b863a18580590cb")
            },
            {
                "name" : "speed",
                "value" : "78",
                "_id" : ("643ab5572b863a18580590cc")
            }
        ],
        "__v" : (0)
    }

        ,{
        "cardType" : "pokemon",
        "cardName" : "mewtwo",
        "imageUrl" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
        "attributes" : [
            {
                "name" : "hp",
                "value" : "106",
                "_id" : ("643ab5572b863a18580590bf")
            },
            {
                "name" : "attack",
                "value" : "110",
                "_id" : ("643ab5572b863a18580590c0")
            },
            {
                "name" : "defense",
                "value" : "90",
                "_id" : ("643ab5572b863a18580590c1")
            },
            {
                "name" : "special-attack",
                "value" : "154",
                "_id" : ("643ab5572b863a18580590c2")
            },
            {
                "name" : "special-def",
                "value" : "90",
                "_id" : ("643ab5572b863a18580590c3")
            },
            {
                "name" : "speed",
                "value" : "130",
                "_id" : ("643ab5572b863a18580590c4")
            }
        ],
        "__v" : 0
    }];
    const card = cards[0];
    const handleCard = () => {
        alert("Hello")
    }

    return (
        <div className="card" onClick={handleCard}>
          <div className="card-image">
            <img src={card.imageUrl} alt={card.cardName} />
          </div>
          <div className="card-details">
            <div className="pokemon-card-name">{card.cardName}</div>
            <div className="pokemon-card-attributes">
              <div className="pokemon-card-attribute">
                <div className="pokemon-card-attribute-label">{card.attributes[0].name}</div>
                <div className="pokemon-card-attribute-value">{card.attributes[0].value}</div>
              </div>
              <div className="pokemon-card-attribute">
              <div className="pokemon-card-attribute-label">{card.attributes[1].name}</div>
                <div className="pokemon-card-attribute-value">{card.attributes[1].value}</div>
              </div>
              <div className="pokemon-card-attribute">
              <div className="pokemon-card-attribute-label">{card.attributes[2].name}</div>
                <div className="pokemon-card-attribute-value">{card.attributes[2].value}</div>
              </div>
              <div className="pokemon-card-attribute">
              <div className="pokemon-card-attribute-label">{card.attributes[3].name}</div>
                <div className="pokemon-card-attribute-value">{card.attributes[3].value}</div>
              </div>
              <div className="pokemon-card-attribute">
              <div className="pokemon-card-attribute-label">{card.attributes[4].name}</div>
                <div className="pokemon-card-attribute-value">{card.attributes[4].value}</div>
              </div>
              <div className="pokemon-card-attribute">
              <div className="pokemon-card-attribute-label">{card.attributes[5].name}</div>
                <div className="pokemon-card-attribute-value">{card.attributes[5].value}</div>
              </div>
            </div>
          </div>
        </div>
        // <div className="pokemon-card">
        //   <div className="pokemon-card-image">
        //     <img src={imageUrl} alt={name} />
        //   </div>
        //   <div className="pokemon-card-details">
        //     <h2 className="pokemon-card-name">{name}</h2>
        //     <div className="pokemon-card-attributes">
        //       <div className="pokemon-card-attribute">
        //         <p className="pokemon-card-attribute-label">H</p>
        //         <p className="pokemon-card-attribute-value">{hp}</p>
        //       </div>
        //       <div className="pokemon-card-attribute">
        //         <p className="pokemon-card-attribute-label">Attack:</p>
        //         <p className="pokemon-card-attribute-value">{attack}</p>
        //       </div>
        //       <div className="pokemon-card-attribute">
        //         <p className="pokemon-card-attribute-label">Defense:</p>
        //         <p className="pokemon-card-attribute-value">{defense}</p>
        //       </div>
        //       <div className="pokemon-card-attribute">
        //         <p className="pokemon-card-attribute-label">Special Attack:</p>
        //         <p className="pokemon-card-attribute-value">{specialAttack}</p>
        //       </div>
        //       <div className="pokemon-card-attribute">
        //         <p className="pokemon-card-attribute-label">Special Defense:</p>
        //         <p className="pokemon-card-attribute-value">{specialDefense}</p>
        //       </div>
        //       <div className="pokemon-card-attribute">
        //         <p className="pokemon-card-attribute-label">Speed:</p>
        //         <p className="pokemon-card-attribute-value">{speed}</p>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      );
};

export default Card;
