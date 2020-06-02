import React, { Component } from 'react';
import RedditPosts from '../../components/RedditPosts/RedditPosts'
import RedditPostsMenu from '../../components/RedditPosts/RedditPostsMenu/RedditPostsMenu';

class RedditPostsContainer extends Component {
    
    state = {
        showPosts: false
    }
    
    togglePosts = () => {
        let newValue = !this.state.showPosts;
        this.setState({ showPosts: newValue });
    }

    render() {
        const tempDataObj = {
            id: 0,
            created: "09/16/2020",
            name:"This long title is the title of the post title section.",
            username: "alielreyes",
            url: "www.google.com",
            text:"<p>csdncsjndcksjndcjknsdkcjnsdjkcnskjdncksjdncjsndckjsndkcjnskdjcnskjdncksjndckjsndcjknsdkcjnsdkjnckjsdnc</p>"
        }
        const tempPostData = [tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj,tempDataObj];

        let redditPostsMenu = null;
        let redditPosts = null;

        if(this.props.data) {
            // redditPostsMenu = <RedditPostsMenu show={this.state.showPosts} count={this.props.data.count} clicked={this.togglePosts}/>
            // redditPosts = <RedditPosts posts={this.props.data.results.slice(0, 5)}/>
        }
        redditPostsMenu = <RedditPostsMenu show={this.state.showPosts} count={0} clicked={this.togglePosts}/>
        redditPosts = <RedditPosts posts={tempPostData}/>

        return (
            <div>
                {redditPostsMenu}
                {this.state.showPosts ? redditPosts:null}
            </div>
        );
    }
};

export default RedditPostsContainer;