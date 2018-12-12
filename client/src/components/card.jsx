import React from 'react';

const getSuitChar = (name) => {
  switch (name) {
    case 'heart': return '♦';
    case 'club': return '♥';
    case 'spade': return '♠';
    case 'diamond': return '♣';
  }
}

const Card = (props) => (
  <div className={`card ${props.card.suit} shadow`}>
    <div className={`upper-left-card-value`}>{props.card.value}</div>
    <div className={`card-suit-char`}>{getSuitChar(props.card.suit)}</div>
    <div className={`lower-right-card-value`}>{props.card.value}</div>
  </div>
);

export default Card;