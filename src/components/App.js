import React, { Component } from 'react';
import './../App.css';
import AddRepetition from './../containers/AddRepetition';
import StoredRepetitions from './../containers/StoredRepetitions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddRepetition />
        <StoredRepetitions />
      </div>
    );
  }
}

export default App;
