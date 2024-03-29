import React, { Component } from 'react'
import './App.css'

import SearchBarContainer from './containers/SearchBarContainers/SearchBarContainer'
import RedditPostsContainer from './containers/RedditPostsContainer/RedditPostsContainer'

import SectionWrapper from './components/SectionWrapper/SectionWrapper'
import Background from './components/Background/Background'
import ShadowBoxGradient from './components/ShadowBoxGradient/ShadowBoxGradient'
import YoutubePlayer from './components/YoutubePlayer/YoutubePlayer'
import Ratings from './components/Ratings/Ratings'
import GameInfo from './components/GameInfo/GameInfo'
import Particles from 'react-particles-js'
import Logo from './components/Logo/Logo'

import { loadGameDetails } from './utils'

//TESTING
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'

class App extends Component {
  state = {
    selectedValue: null,
    isLoading: false
  }

  handleSelectedValue = (newValue) => {
    this.setState({ isLoading: true })
    loadGameDetails(newValue.id).then((gameData) => {
      this.setState({ selectedValue: gameData })
      this.setState({ isLoading: false })
    })
  }

  render() {
    //Default Values
    let bgImage = null
    let youtubePlayer = null
    let ratings = null
    let gameInfo = null
    let redditPosts = null

    const parsePlatformData = () => {
      let platforms = this.state.selectedValue.platforms
        ? this.state.selectedValue.platforms
        : null
      return platforms
        ? platforms.map((platformObj) => platformObj.platform)
        : null
    }

    //Once we have the game data loaded.
    if (this.state.selectedValue !== null) {
      let platformData = parsePlatformData()
      bgImage = this.state.selectedValue.background_image

      // NOTE: API is not providing videos anymore
      youtubePlayer = (
        <YoutubePlayer
          videoId={this.state.selectedValue?.clip?.video ?? null}
        />
      )

      //TODO, Find replacements for IGN and gamespot.
      ratings = (
        <Ratings
          metacritic={this.state.selectedValue.metacritic}
          ratings={this.state.selectedValue.ratings}
        />
      )

      gameInfo = (
        <GameInfo
          summary={this.state.selectedValue.description}
          developers={this.state.selectedValue.developers}
          publishers={this.state.selectedValue.publishers}
          platforms={platformData}
          genres={this.state.selectedValue.genres}
        />
      )

      redditPosts = (
        <RedditPostsContainer gameId={this.state.selectedValue.id} />
      )
    }

    return (
      <div className='App'>
        <ShadowBoxGradient degree={0} fromOpacity={0.2} toOpacity={0.9} />

        <Particles
          params={{
            particles: {
              number: {
                value: 50
              },
              size: {
                value: 3
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                }
              }
            }
          }}
        />
        <Background image={bgImage} />

        <SectionWrapper>
          <Logo />
          <SearchBarContainer
            selectedValue={this.handleSelectedValue}
            suggestionCount={3}
            searchDelay={0.2}
          />
        </SectionWrapper>

        <SectionWrapper>
          {youtubePlayer}
          {ratings}
          {gameInfo}

          {/* Reddit Comments */}
          {redditPosts}
        </SectionWrapper>
        {this.state.isLoading ? (
          <LoadingSpinner style={{ marginTop: '100px' }} />
        ) : null}
      </div>
    )
  }
}

export default App
