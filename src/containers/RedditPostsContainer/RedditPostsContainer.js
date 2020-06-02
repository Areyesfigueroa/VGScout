import React, { Component, Fragment } from 'react';
import RedditPosts from '../../components/RedditPosts/RedditPosts'
import RedditPostsHolder from '../../components/RedditPostsHolder/RedditPostsHolder';

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
            // <RedditPosts posts={tempPostData}/>

            // <Fragment>
            //     <RedditPosts posts={tempPostData}/>
            //     <RedditPosts posts={tempPostData}/>
            //     <RedditPosts posts={tempPostData}/>
            //     <RedditPosts posts={tempPostData}/>
            // </Fragment>

        );
    }
};

export default RedditPostsContainer;