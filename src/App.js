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
import RedditPostsHolder from "./components/RedditPosts/RedditPostsMenu/RedditPostsMenu";

//TESTING
import { loadGameDetails, loadRedditPosts } from "./utils";

class App extends Component {

  state = {
    selectedValue: null,
    redditPostsData: null
  }

  clips = null;

  handleSelectedValue = (newValue) => {
    loadGameDetails(newValue.id).then(gameData => {
      loadRedditPosts(gameData.id).then(postData => {
        console.log(gameData);
        console.log(postData);
        this.setState({ 
          selectedValue: gameData,
          redditPostsData: postData
        });
      });
    });
  }

  render() {

    //Default Values
    let bgImage = require("./assets/background-default.png");
    let youtubePlayer = null;
    let ratings = null;
    let gameInfo = null;

    const parsePlatformData = () => {
      let platforms = this.state.selectedValue.platforms ? this.state.selectedValue.platforms: null;
      return platforms ? platforms.map(platformObj => platformObj.platform) : null;
    }

    //Once we have the game data loaded.
    if(this.state.selectedValue !== null) {
      let platformData = parsePlatformData();
      bgImage = this.state.selectedValue.background_image;

      youtubePlayer = (
        <YoutubePlayer 
        videoId={this.state.selectedValue.clip ? this.state.selectedValue.clip.video:null}
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
        />
      );
    }

    return (
      <div className="App">
        <ShadowBoxGradient degree={0} fromOpacity={0.2} toOpacity={0.9}/>
        <SectionWrapper>
          <SearchBarContainer 
          selectedValue={this.handleSelectedValue} 
          suggestionCount={3} 
          searchDelay={0.2} />
        </SectionWrapper>

        {/* If there is a selection */}
        <Background image={bgImage}/>
        <SectionWrapper>
          {youtubePlayer}
          {ratings}
          {gameInfo}
           {/* Reddit Comments */}
           <RedditPostsContainer data={this.state.redditPostsData} />
        </SectionWrapper>
      </div>
    );
  }
}

export default App;
