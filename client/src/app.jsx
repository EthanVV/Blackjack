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
      playerIn: true,
      victor: '',
      turn: 0
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
      playerIn: true,
      victor: '',
      gameStatus: ''
    });
  }

  nextTurn() {
    
  }

  hit() {
    let topCard = this.state.deck.slice(-1);
    this.setState({
      pHand: this.state.pHand.concat(topCard),
      deck: this.state.deck.slice(0,-1),
    }, () => {
      let handValue = this.getHandVal(this.state.pHand);
      if (handValue === 21) {
        this.setState({victor: 'BlackJack! Player Wins'})
      }
      if (handValue > 21) {
        this.setState({victor: 'Dealer Wins!'});
      }
    });
  }

  dealerHit() {

  }

  pass() {this.setState({playerIn: false})};

  getHandVal(arr) {
    let val = 0;
    let aces = 0;
    for (let x of arr) {
      if (typeof x.value === 'number') val += x.value;
      else if (x.value === 'A') aces++;
      else val += 10;
    }
    while (aces) {
      if (aces === 1 && val <= 10) val += 11;
      else val += 1;
      aces--;
    }
    return val;
  }

  render() {
    return (
      <div className={`board`}>
        <Hand id={`dealer-hand`} cards={this.state.dHand}/>
        <div className={`options-box`}>
          <button className={`hit-button`} onClick={() => this.hit()}>Hit</button>
          <button className={`pass-button`}>Pass</button>
        </div>
        <Hand id={'player-hand'} cards={this.state.pHand}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));