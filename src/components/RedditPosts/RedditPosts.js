import React, { Fragment } from 'react';
import RedditPost from './RedditPost/RedditPost';
import classes from './RedditPosts.module.css';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const redditPosts = (props) => {

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
            {props.loading ? <LoadingSpinner />:null}
        </Fragment>
    );
};

export default redditPosts;