import React, { Component } from 'react';
import './App.css';

import SectionWrapper from "./components/SectionWrapper/SectionWrapper";
import SearchBarContainer from "./containers/SearchBarContainers/SearchBarContainer";
import Background from "./components/Background/Background";
import ShadowBoxGradient from "./components/ShadowBoxGradient/ShadowBoxGradient";
import YoutubePlayer from "./components/YoutubePlayer/YoutubePlayer";
import Ratings from "./components/Ratings/Ratings";
import GameInfo from "./components/GameInfo/GameInfo";

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
    const tempSummary = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    const tempDevInfo = [      
      {id: 0, name: "Naughty Dog"}
    ];

    const tempPlatformInfo = [
      {id: 0, name: "PlayStation 4"},
      {id:1, name: "Xbox One"}
    ];

    const tempGenreInfo = [
      {id: 0, name: "Action Adventure"},
      {id:1, name: "Action"}
    ];
    const tempPublisherInfo = [
      {id: 0, name: "Sony"}
    ];



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
          <Ratings
          metacritic={this.state.selectedValue.metacritic}
          ign={8}
          gamespot={4.5}
           />
           {/* Game Info */}
            <GameInfo
              summary={tempSummary}
              developers={tempDevInfo}
              publishers={tempPublisherInfo}
              platforms={tempPlatformInfo}
              genres={tempGenreInfo}
            />
           {/* Metacritic Comments */}
        </SectionWrapper>}



      </div>
    );
  }
}

export default App;
