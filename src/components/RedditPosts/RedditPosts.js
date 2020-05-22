import React from 'react';
import RedditPost from './RedditPost/RedditPost';

const redditPosts = (props) => {
    return props.posts.map((post) => {
        <RedditPost 
        key={post.id}
        date={post.date}
        title={post.title}
        userName={post.username}
        fullPostURL={post.fullPostURL}
        content={post.content}
        isCollapsed={post.collapsed}
        />
    });
};

export default redditPosts;