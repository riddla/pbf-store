import React, { Component } from 'react';
import './../App.css';
import AddRepetition from './../containers/AddRepetition';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddRepetition />
      </div>
    );
  }
}

export default App;
