import React, { Component } from 'react';
import RedditPosts from '../../components/RedditPosts/RedditPosts'
import RedditPostsMenu from '../../components/RedditPosts/RedditPostsMenu/RedditPostsMenu';

import { loadRedditPosts } from '../../utils';

import ScrollableAnchor from 'react-scrollable-anchor';

class RedditPostsContainer extends Component {
    
    state = {
        redditPostsData: null,
        postsPageNum: 1,
        showPosts: false
    }

    componentDidMount() {

        loadRedditPosts(this.props.gameId, this.state.postsPageNum).then(postData => {
            console.log(postData);
            this.setState({ redditPostsData: postData });
        });

        window.addEventListener("scroll", this.onBottomReached);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onBottomReached);
    }

    componentDidUpdate(prevProps, prevState) {

        if(prevProps.gameId !== this.props.gameId) {
            console.log("Game Changed");
            loadRedditPosts(this.props.gameId, this.state.postsPageNum).then(postsData => {
                //Reset
                console.log(postsData);
                this.setState({ redditPostsData: postsData });
            });
        }

        if(prevState.showPosts !== this.state.showPosts) {
            if(this.showPosts) return;
            this.resetCurrPosts();
        }

        if(prevState.postsPageNum !== this.state.postsPageNum){
            loadRedditPosts(this.props.gameId, this.state.postsPageNum).then(postsData => {
                let newRedditPostsData = {...this.state.redditPostsData};
                postsData.results.forEach((post) => newRedditPostsData.results.push(post));        
                this.setState({ redditPostsData: newRedditPostsData });
            });    
        }
    }

    onBottomReached = () => { 
        const offset = 80;
        if ((window.innerHeight + window.scrollY - offset) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            //load the reddit posts
            let newPage= this.state.postsPageNum+1;
            this.setState({ postsPageNum: newPage });
        }
    }

    resetCurrPosts = () => {
        let newRedditPostsData = {...this.state.redditPostsData};
        newRedditPostsData.results = newRedditPostsData.results.slice(0,10);

        this.setState({ redditPostsData: newRedditPostsData });
    }

    togglePosts = () => {
        let newValue = !this.state.showPosts;

        this.setState({ showPosts: newValue });
    }

    render() {
        let redditPostsMenu = null;
        let redditPosts = null;

        if(this.state.redditPostsData) {
            redditPostsMenu = <RedditPostsMenu show={this.state.showPosts} count={this.state.redditPostsData.count} clicked={this.togglePosts}/>
            redditPosts = <RedditPosts posts={this.state.redditPostsData.results} />
        }

        return (
            <ScrollableAnchor id={"redditPostsSection"}>
                <div>
                    {redditPostsMenu}
                    {this.state.showPosts && this.state.redditPostsData.results.length > 0 ? redditPosts:null}
                </div>
            </ScrollableAnchor>
        );
    }
};

export default RedditPostsContainer;