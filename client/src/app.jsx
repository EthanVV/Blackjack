import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {
    return (
      <div>
        App Renders Here
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));