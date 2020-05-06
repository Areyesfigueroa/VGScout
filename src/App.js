import React, { Component } from 'react';
import './App.css';

import SearchBarContainer from "./containers/SearchBarContainer/SearchBarContainer";

class App extends Component {

  render() {

    return (
      <div className="App">
        <SearchBarContainer />
      </div>
    );
  }
}

export default App;
