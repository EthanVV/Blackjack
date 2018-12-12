import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card.jsx';

const exampleCard = {value: 'K', suit: 'heart'};


class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {
    return (
      <div>
        <Card card={{value: '2', suit: 'heart'}}/>
        <Card card={{value: 'K', suit: 'spade'}}/>
        <Card card={{value: '7', suit: 'diamond'}}/>
        <Card card={{value: 'A', suit: 'club'}}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));