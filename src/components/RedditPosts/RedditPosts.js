import React from 'react';
import RedditPost from './RedditPost/RedditPost';
import classes from './RedditPosts.module.css';

const redditPosts = (props) => {
    return (
        <div className={classes.RedditPosts}>
            {props.posts.map((post) => {
                return (<RedditPost 
                key={post.id}
                date={post.created}
                title={post.name}
                userName={post.username}
                fullPostURL={post.url}
                img={post.image}
                content={post.text}
                />)
            })};
        </div>
    );

};

export default redditPosts;