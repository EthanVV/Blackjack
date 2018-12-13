import React from 'react';
import ReactDOM from 'react-dom';
import Hand from './components/hand.jsx';

const {shuffle, fresh} = require('./utilities/deck.js');


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      deck: [],
      pHand: [],
      dHand: [],
      playerIn: true
    };
  }
 
  componentDidMount() {
   this.newGame();
  }

  newGame() {
    this.setState({
      deck: shuffle(fresh()),
      pHand: [],
      dHand: [],
      playerIn: true
    });
    
  }

  render() {
    return (
      <div className={`board`}>
        <Hand id={`dealer-hand`} cards={this.state.deck.slice(0, 5)}/>
        <div>middle</div>
        <Hand id={'player-hand'} cards={this.state.deck.slice(5,10)}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));