import React, { Component } from 'react';
import './App.css';

import SectionWrapper from "./components/SectionWrapper/SectionWrapper";
import SearchBarContainer from "./containers/SearchBarContainers/SearchBarContainer";
import Background from "./components/Background/Background";
import ShadowBoxGradient from "./components/ShadowBoxGradient/ShadowBoxGradient";

class App extends Component {

  state = {
    selectedValue: null
  }

  //TESTING, DELETE
  componentDidUpdate(prevProps, prevState) {
    if(this.state.selectedValue !== prevState.selectedValue) {
      console.log(this.state.selectedValue);
    }
  }

  handleSelectedValue = (newValue) => {
    this.setState({ selectedValue: newValue });
  }

  render() {

    return (
      <div className="App">
        <ShadowBoxGradient degree={0} fromOpacity={0.2} toOpacity={0.9}/>
        <Background value={this.state.selectedValue}/>
        <SectionWrapper>
          <SearchBarContainer 
          selectedValue={this.handleSelectedValue} 
          suggestionCount={3} 
          searchDelay={0.2} />
        </SectionWrapper>
      </div>
    );
  }
}

export default App;
