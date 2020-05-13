import React, { Component } from 'react';
import './App.css';

import SectionWrapper from "./components/SectionWrapper/SectionWrapper";
import SearchBarContainer from "./containers/SearchBarContainers/SearchBarContainer";

//TESTING
import Button from "./components/Button/Button";

class App extends Component {

  render() {

    return (
      <div className="App">
        <SectionWrapper>
          <SearchBarContainer suggestionCount={3} searchDelay={0.2} />
          <Button label={"Click Me!"}></Button>
        </SectionWrapper>
      </div>
    );
  }
}

export default App;
