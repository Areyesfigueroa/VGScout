import React, { Component } from 'react';
import RedditPosts from '../../components/RedditPosts/RedditPosts'

class RedditPostsContainer extends Component {
    
    render() {
        const tempPostData = [{
            id: 0,
            created: "09/16/2020",
            name:"This long title is the title of the post title section.",
            username: "alielreyes",
            url: "www.google.com",
            text:"<p>csdncsjndcksjndcjknsdkcjnsdjkcnskjdncksjdncjsndckjsndkcjnskdjcnskjdncksjndckjsndcjknsdkcjnsdkjnckjsdnc</p>"
        }];

        return (
            this.props.data ? <RedditPosts posts={this.props.data.results}/>:null
        );
    }
};

export default RedditPostsContainer;