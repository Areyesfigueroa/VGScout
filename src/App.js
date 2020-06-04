import React, { Component } from 'react';
import './App.css';

import SearchBarContainer from "./containers/SearchBarContainers/SearchBarContainer";
import RedditPostsContainer from './containers/RedditPostsContainer/RedditPostsContainer';

import SectionWrapper from "./components/SectionWrapper/SectionWrapper";
import Background from "./components/Background/Background";
import ShadowBoxGradient from "./components/ShadowBoxGradient/ShadowBoxGradient";
import YoutubePlayer from "./components/YoutubePlayer/YoutubePlayer";
import Ratings from "./components/Ratings/Ratings";
import GameInfo from "./components/GameInfo/GameInfo";

//TESTING
import { loadGameDetails } from "./utils";
import ScrollableAnchor from 'react-scrollable-anchor';


class App extends Component {

  state = {
    selectedValue: null
  }

  clips = null;

  handleSelectedValue = (newValue) => {
    loadGameDetails(newValue.id).then(gameData => {
      this.setState({ selectedValue: gameData });
    });
  }

  render() {

    //Default Values
    let bgImage = require("./assets/background-default.png");
    let youtubePlayer = null;
    let ratings = null;
    let gameInfo = null;
    let redditPosts = null;

    const parsePlatformData = () => {
      let platforms = this.state.selectedValue.platforms ? this.state.selectedValue.platforms : null;
      return platforms ? platforms.map(platformObj => platformObj.platform) : null;
    }

    //Once we have the game data loaded.
    if (this.state.selectedValue !== null) {
      let platformData = parsePlatformData();
      bgImage = this.state.selectedValue.background_image;

      youtubePlayer = (
        <YoutubePlayer
          videoId={this.state.selectedValue.clip ? this.state.selectedValue.clip.video : null}
        />
      );

      //TODO, Find replacements for IGN and gamespot.
      ratings = (
        <Ratings
          metacritic={this.state.selectedValue.metacritic}
          ign={8}
          gamespot={4.5}
        />
      );

      gameInfo = (
        <GameInfo
          summary={this.state.selectedValue.description}
          developers={this.state.selectedValue.developers}
          publishers={this.state.selectedValue.publishers}
          platforms={platformData}
          genres={this.state.selectedValue.genres}
        />);

      redditPosts = (
          <RedditPostsContainer gameId={this.state.selectedValue.id} />
      );


    }

    return (
      <div className="App">
        <ShadowBoxGradient degree={0} fromOpacity={0.2} toOpacity={0.9} />
        <SectionWrapper>
          <SearchBarContainer
            selectedValue={this.handleSelectedValue}
            suggestionCount={3}
            searchDelay={0.2} />
        </SectionWrapper>

        {/* If there is a selection */}
        <Background image={bgImage} />
        <SectionWrapper>
          {youtubePlayer}
          {ratings}
          {gameInfo}

          {/* Reddit Comments */}
          {redditPosts}
        </SectionWrapper>
      </div>
    );
  }
}

export default App;
