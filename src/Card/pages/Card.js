import React from "react";
import "../pages/Card.css";
import CardItems from "../components/CardItems";
import { removeCardFromDeck } from "../../stateManager/action-creators";
import { useDispatch } from "react-redux";

const Card = (props) => {

  const dispatch = useDispatch();


  // const cards = [{
  //     "_id" : ("643ab55f2b863a18580591fe"),
  //     "cardType" : "pokemon",
  //     "cardName" : "palkia",
  //     "imageUrl" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
  //     "attributes" : [
  //         {
  //             "name" : "hp",
  //             "value" : "90",
  //             "_id" : ("643ab55f2b863a18580591ff")
  //         },
  //         {
  //             "name" : "attack",
  //             "value" : "120",
  //             "_id" : ("643ab55f2b863a1858059200")
  //         },
  //         {
  //             "name" : "defense",
  //             "value" : "100",
  //             "_id" : ("643ab55f2b863a1858059201")
  //         },
  //         {
  //             "name" : "special-attack",
  //             "value" : "150",
  //             "_id" : ("643ab55f2b863a1858059202")
  //         },
  //         {
  //             "name" : "special-defense",
  //             "value" : "120",
  //             "_id" : ("643ab55f2b863a1858059203")
  //         },
  //         {
  //             "name" : "speed",
  //             "value" : "100",
  //             "_id" : ("643ab55f2b863a1858059204")
  //         }
  //     ],
  //     "__v" : (0)
  // }

  //     ,{
  //     "_id" : ("643ab5572b863a18580590c6"),
  //     "cardType" : "pokemon",
  //     "cardName" : "blastoise",
  //     "imageUrl" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  //     "attributes" : [
  //         {
  //             "name" : "hp",
  //             "value" : "79",
  //             "_id" : ("643ab5572b863a18580590c7")
  //         },
  //         {
  //             "name" : "attack",
  //             "value" : "83",
  //             "_id" : ("643ab5572b863a18580590c8")
  //         },
  //         {
  //             "name" : "defense",
  //             "value" : "100",
  //             "_id" : ("643ab5572b863a18580590c9")
  //         },
  //         {
  //             "name" : "special-attack",
  //             "value" : "85",
  //             "_id" : ("643ab5572b863a18580590ca")
  //         },
  //         {
  //             "name" : "special-defense",
  //             "value" : "105",
  //             "_id" : ("643ab5572b863a18580590cb")
  //         },
  //         {
  //             "name" : "speed",
  //             "value" : "78",
  //             "_id" : ("643ab5572b863a18580590cc")
  //         }
  //     ],
  //     "__v" : (0)
  // }

  //     ,{
  //     "cardType" : "pokemon",
  //     "cardName" : "mewtwo",
  //     "imageUrl" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
  //     "attributes" : [
  //         {
  //             "name" : "hp",
  //             "value" : "106",
  //             "_id" : ("643ab5572b863a18580590bf")
  //         },
  //         {
  //             "name" : "attack",
  //             "value" : "110",
  //             "_id" : ("643ab5572b863a18580590c0")
  //         },
  //         {
  //             "name" : "defense",
  //             "value" : "90",
  //             "_id" : ("643ab5572b863a18580590c1")
  //         },
  //         {
  //             "name" : "special-attack",
  //             "value" : "154",
  //             "_id" : ("643ab5572b863a18580590c2")
  //         },
  //         {
  //             "name" : "special-def",
  //             "value" : "90",
  //             "_id" : ("643ab5572b863a18580590c3")
  //         },
  //         {
  //             "name" : "speed",
  //             "value" : "130",
  //             "_id" : ("643ab5572b863a18580590c4")
  //         }
  //     ],
  //     "__v" : 0
  // }];
  // const card = cards[0];
  const handleCard = (card) => {
    //Player 1
    props.setPlayer1ChosenCard(card);
    const P2ChosenCard_id = card?._id;
    // const filterP1Cards = props.player1Deck.filter(card => card?._id !== id);
    // props.setPlayer1Deck(filterP1Cards);



    //Player 2
    const P2len = props.player2Deck.length;
    const randomIdx = Math.floor(Math.random() * P2len);
    const P2chosenCard = props.player2Deck[randomIdx];
    props.setPlayer2ChosenCard(P2chosenCard);

    // const filterP2Cards = props.player2Deck.filter(card => card?._id !== P2chosenCard._id);
    // props.setPlayer2Deck(filterP2Cards);

    dispatch(removeCardFromDeck(P2ChosenCard_id, P2chosenCard._id));
  }

  return (
    <div className="card" onClick={props.clickCard ? () => handleCard(props.card) : null}>
      <div className="card-image">
        <img className="card-img-details" src={props.imageUrl} alt={props.cardName} />
      </div>
      <div className="card-details">
        <div className="pokemon-card-name">{props.cardName}</div>
        <div className="pokemon-card-attributes">
          {props.attributes.map(attribute => (
            <CardItems
              key={attribute?._id}
              name={attribute.name}
              value={attribute.value} />
          ))}
        </div>
        {/* <div className="pokemon-card-attributes">

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
            </div> */}
      </div>
    </div>






    // <div className="card" >
    //   <div className="card-image">
    //     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png" alt="none" />
    //   </div>
    //   <div className="card-details">
    //     <div className="pokemon-card-name">palkia</div>
    //     {/* <div className="pokemon-card-attributes">
    //       {props.attributes.map(attribute => (
    //         <CardItems
    //           key={attribute._id}
    //           name={attribute.name}
    //           value={attribute.value} />
    //       ))}
    //     </div> */}
    //     <div className="pokemon-card-attributes">

    //       <div className="pokemon-card-attribute">
    //         <div className="pokemon-card-attribute-label">hp</div>
    //         <div className="pokemon-card-attribute-value">90</div>
    //       </div>
    //       <div className="pokemon-card-attribute">
    //         <div className="pokemon-card-attribute-label">attack</div>
    //         <div className="pokemon-card-attribute-value">120</div>
    //       </div>
    //       <div className="pokemon-card-attribute">
    //         <div className="pokemon-card-attribute-label">defense</div>
    //         <div className="pokemon-card-attribute-value">100</div>
    //       </div>
    //       <div className="pokemon-card-attribute">
    //         <div className="pokemon-card-attribute-label">special-attack</div>
    //         <div className="pokemon-card-attribute-value">150</div>
    //       </div>
    //       <div className="pokemon-card-attribute">
    //         <div className="pokemon-card-attribute-label">special-defense</div>
    //         <div className="pokemon-card-attribute-value">120</div>
    //       </div>
    //       <div className="pokemon-card-attribute">
    //         <div className="pokemon-card-attribute-label">speed</div>
    //         <div className="pokemon-card-attribute-value">130</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


  );
};

export default Card;
