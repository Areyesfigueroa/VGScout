import React, { Component } from 'react';
import RedditPosts from '../../components/RedditPosts/RedditPosts'

class RedditPostsContainer extends Component {
    
    state = {
        collapse: false
    }

    togglePost = () => {
        let newValue = !this.state.collapse;
        this.setState({ collapse: newValue });
    }
    
    render() {
        return (
            this.props.data ? 
            <RedditPosts
            posts={this.props.data.results}
            collapse={this.state.collapse}
            clicked={this.togglePost}
             /> 
             :
             null
        );
    }
};

export default RedditPostsContainer;