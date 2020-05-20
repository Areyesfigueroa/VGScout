import React, { Component } from 'react';
import './App.css';

import SectionWrapper from "./components/SectionWrapper/SectionWrapper";
import SearchBarContainer from "./containers/SearchBarContainers/SearchBarContainer";
import Background from "./components/Background/Background";
import ShadowBoxGradient from "./components/ShadowBoxGradient/ShadowBoxGradient";
import YoutubePlayer from "./components/YoutubePlayer/YoutubePlayer";
import Ratings from "./components/Ratings/Ratings";

class App extends Component {

  state = {
    selectedValue: null
  }

  clips = null;

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

        {/* If there is a selection */}
        {!this.state.selectedValue ? 
        null
        :
        <SectionWrapper>
          <YoutubePlayer 
          videoId={this.state.selectedValue.clip ? this.state.selectedValue.clip.video:null}
          />
          {/* Ratings */}
          <Ratings />

        </SectionWrapper>

        // Game Information
        // Comments from Meta critic
        }


      </div>
    );
  }
}

export default App;
