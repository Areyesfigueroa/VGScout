import React, { Component } from 'react';
import RedditPosts from '../../components/RedditPosts/RedditPosts'
import RedditPostsMenu from '../../components/RedditPosts/RedditPostsMenu/RedditPostsMenu';

import { loadRedditPosts } from '../../utils';

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

        if(prevState.showPosts !== this.state.showPosts) {
            if(this.showPosts) return;
            this.resetPosts();
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

    resetPosts = () => {
        let newRedditPostsData = {...this.state.redditPostsData};
        newRedditPostsData.results = newRedditPostsData.results.slice(0,10);

        this.setState({ redditPostsData: newRedditPostsData });
    }

    togglePosts = () => {
        let newValue = !this.state.showPosts;
        this.setState({ showPosts: newValue });
    }

    render() {
        // const tempDataObj = {
        //     id: 0,
        //     created: "09/16/2020",
        //     name:"This long title is the title of the post title section.",
        //     username: "alielreyes",
        //     url: "www.google.com",
        //     text:"<p>csdncsjndcksjndcjknsdkcjnsdjkcnskjdncksjdncjsndckjsndkcjnskdjcnskjdncksjndckjsndcjknsdkcjnsdkjnckjsdnc</p>"
        // }
        // const tempPostData = [tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj];

        let redditPostsMenu = null;
        let redditPosts = null;

        if(this.state.redditPostsData) {
            redditPostsMenu = <RedditPostsMenu show={this.state.showPosts} count={this.state.redditPostsData.count} clicked={this.togglePosts}/>
            redditPosts = <RedditPosts posts={this.state.redditPostsData.results} />
        }
        //redditPostsMenu = <RedditPostsMenu show={this.state.showPosts} count={0} clicked={this.togglePosts}/>
        //redditPosts = <RedditPosts posts={tempPostData} />

        return (
            <div>
                {redditPostsMenu}
                {this.state.showPosts ? redditPosts:null}
            </div>
        );
    }
};

export default RedditPostsContainer;