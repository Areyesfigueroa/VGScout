import React from 'react';
import RedditPost from './RedditPost/RedditPost';

const redditPosts = (props) => {
    return props.posts.map((post) => {
        return (<RedditPost 
        key={post.id}
        date={post.created}
        title={post.name}
        userName={post.username}
        fullPostURL={post.url}
        img={post.image}
        content={post.text}
        />)
    });
};

export default redditPosts;