import React, { Component } from 'react';
import './App.css';

import SectionWrapper from "./components/SectionWrapper/SectionWrapper";
import SearchBarContainer from "./containers/SearchBarContainer/SearchBarContainer";

class App extends Component {

  render() {

    return (
      <div className="App">
        <SectionWrapper>
          <SearchBarContainer />
        </SectionWrapper>
      </div>
    );
  }
}

export default App;
