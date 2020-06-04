import React, { Fragment } from 'react';
import RedditPost from './RedditPost/RedditPost';
import classes from './RedditPosts.module.css';

const redditPosts = (props) => {

    let loadingSpinner = <div style={{color: "white"}}>Loading....</div>;
    let redditPosts = (<div className={classes.RedditPosts}>
        {props.posts.map((post) => {
            return (<RedditPost
                key={post.id}
                date={post.created}
                title={post.name}
                userName={post.username}
                fullPostURL={post.url}
                img={post.image}
                content={post.text}
            />);
        })};
    </div>);

    return (
        <Fragment>
            {redditPosts}
            {props.loading ? loadingSpinner: null}
        </Fragment>
    );
};

export default redditPosts;