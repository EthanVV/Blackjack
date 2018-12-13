import React from 'react';
import Card from './card.jsx';

const Hand = (props) => (
  <div className={`hand`}>
    {props.cards.map(x => 
      <Card card={x} key={`${x.suit}${x.value}`}/>
    )}
  </div>
)

export default Hand;