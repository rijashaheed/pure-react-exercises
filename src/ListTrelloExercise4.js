import React from "react";
import PropTypes from "prop-types";
import "./App.css";

const CardList = ({ cards }) => {
  return (
    <div class="trello-card">
      <h4>Phone features</h4>
      <ul className="card-list">
        {cards.map((card) => (
          <>
            <li className="card-item">
              <CardItem key={card.id} card={card} />
            </li>
          </>
        ))}
        <li className="card-text">Add a card ...</li>
      </ul>
    </div>
  );
};

CardList.prototypes = {
  cards: PropTypes.array.isRequired,
};

const CardItem = ({ card }) => {
  return <div>{card.name}</div>;
};

CardItem.prototypes = {
  card: PropTypes.object.isRequired,
};

export default CardList;
