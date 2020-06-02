import React, { Component, Fragment } from 'react';
import RedditPosts from '../../components/RedditPosts/RedditPosts'
import RedditPostsHolder from '../../components/RedditPostsHolder/RedditPostsHolder';

class RedditPostsContainer extends Component {
    
    state = {
        showPosts: false
    }

    togglePosts = () => {
        let newValue = !this.state.showPosts;
        this.setState({ showPosts: newValue });
    }

    render() {
        const tempPostData = [{
            id: 0,
            created: "09/16/2020",
            name:"This long title is the title of the post title section.",
            username: "alielreyes",
            url: "www.google.com",
            text:"<p>csdncsjndcksjndcjknsdkcjnsdjkcnskjdncksjdncjsndckjsndkcjnskdjcnskjdncksjndckjsndcjknsdkcjnsdkjnckjsdnc</p>"
        }];

        let redditPostsHolder = null;
        let redditPosts = null;

        if(this.props.data) {
            redditPostsHolder = <RedditPostsHolder show={this.state.showPosts} count={this.props.data.count} clicked={this.togglePosts}/>
            redditPosts = <RedditPosts posts={this.props.data.results}/>
        }
        // redditPostsHolder = <RedditPostsHolder show={this.state.showPosts} count={0} clicked={this.togglePosts}/>
        // redditPosts = <RedditPosts posts={tempPostData}/>

        return (
            <div>
                {redditPostsHolder}
                {this.state.showPosts ? redditPosts:null}
            </div>
        );
    }
};

export default RedditPostsContainer;