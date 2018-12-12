import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card.jsx';

const {shuffle, fresh} = require('./utilities/deck.js');


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      deck: []
    };
  }
 
  componentDidMount() {
   this.setState({deck: shuffle(fresh())});
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