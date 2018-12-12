import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card.jsx';

const values = ['A',2,3,4,5,6,7,8,9,10,'J','K','Q'];
const suits = ['heart','club','spade','diamond'];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      deck: []
    };
  }
 
  componentDidMount() {
   this.replaceDeck();
  }
  
  replaceDeck() {
    let shuffledDeck = [];
    for (let s of suits) for (let v of values) {
      shuffledDeck.push({suit: s, value: v});
    }
    this.setState({deck: shuffledDeck});
  }

  render() {
    return (
      <div>
        {this.state.deck.map((x, i) => {
          return <Card card={x} key={`${x.suit}${x.value}`}/>
        })}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));