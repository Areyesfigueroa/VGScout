import React, { Component } from 'react';
import RedditPosts from '../../components/RedditPosts/RedditPosts'
import RedditPostsMenu from '../../components/RedditPosts/RedditPostsMenu/RedditPostsMenu';

import { loadRedditPosts } from '../../utils';
interface Props {
    gameId: string;
}
class RedditPostsContainer extends Component {

    state = {
        redditPostsData: null,
        postsPageNum: 1,
        showPosts: false,
        isLoading: false
    }

    componentDidMount() {

        loadRedditPosts(this.props.gameId, this.state.postsPageNum).then(postData => {
            //console.log(postData);
            this.setState({ redditPostsData: postData });
        });

        window.addEventListener("scroll", this.onBottomReached);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onBottomReached);
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.gameId !== this.props.gameId) {
            //console.log("Game Changed - Reset");

            if (this.state.postsPageNum === 1) {
                //console.log("Reset Posts");
                this.resetRedditPosts();
            }

            this.setState({ postsPageNum: 1 });
        }

        if (prevState.showPosts !== this.state.showPosts) {
            if (this.state.showPosts) return;
            this.sliceCurrPosts();
        }

        if (prevState.postsPageNum !== this.state.postsPageNum) {
            if (this.state.postsPageNum > 1) {
                //console.log(this.state.postsPageNum);
                //console.log('Append New 10 new Posts');
                this.appendRedditPosts();
            } else {
                //console.log("Reset Posts");
                this.resetRedditPosts();
            }
        }
    }


    resetRedditPosts = () => {
        loadRedditPosts(this.props.gameId, 1).then(postsData => {
            this.setState({ redditPostsData: postsData });
        });
    }
    appendRedditPosts = () => {
        this.setState({ isLoading: true });
        loadRedditPosts(this.props.gameId, this.state.postsPageNum).then(postsData => {
            let newRedditPostsData = { ...this.state.redditPostsData };
            
            if(postsData.results.length > 0) {
                postsData.results.forEach((post) => newRedditPostsData.results.push(post));
            }

            this.setState({
                redditPostsData: newRedditPostsData,
                isLoading: false
            });
        });
    }
    sliceCurrPosts = () => {
        if (this.state.redditPostsData.results.length <= 0) return;

        // console.log('Slicing down to 10 comments');

        let newRedditPostsData = { ...this.state.redditPostsData };
        newRedditPostsData.results = newRedditPostsData.results.slice(0, 10);

        this.setState({ redditPostsData: newRedditPostsData });
    }

    onBottomReached = () => {
        if (!this.state.showPosts || this.state.isLoading) return;

        const offset = 0;
        if ((window.innerHeight + window.scrollY - offset) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            //load the reddit posts
            //console.log("Bottom Reached - Increment Page");
            let newPage = this.state.postsPageNum + 1;
            this.setState({ postsPageNum: newPage });
        }
    }

    togglePosts = () => {
        let newValue = !this.state.showPosts;

        this.setState({ showPosts: newValue });
    }

    render() {
        let redditPostsMenu = null;
        let redditPosts = null;

        if (this.state.redditPostsData) {
            redditPostsMenu = <RedditPostsMenu show={this.state.showPosts} count={this.state.redditPostsData.count} clicked={this.togglePosts} />
            redditPosts = <RedditPosts posts={this.state.redditPostsData.results} loading={this.state.isLoading} />
        }

        return (
            <div>
                {redditPostsMenu}
                {this.state.showPosts && this.state.redditPostsData.results.length > 0 ? redditPosts : null}
            </div>
        );
    }
};

export default RedditPostsContainer;