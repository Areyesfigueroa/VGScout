import React from 'react';
import classes from './RedditPost.module.css';

const redditPost = (props) => {
    return (
        <div className={classes.RedditPost + " " + classes.column}>
            <div className={classes.header}>
                <div className={classes.postInfo}>
                    <p>{props.date}</p>
                    <p>{props.title}</p>
                    <p>{props.userName}</p>
                </div>
                <div className={classes.fullPostLink}>
                    <a href={props.fullPostURL}>View Full Post</a>
                </div>
            </div>
            <hr />
            <div className={classes.postContent + " " + classes.collapse}>
                {props.content}
            </div>
            <button onClick={props.clicked}>more</button>
        </div>
    );
};

export default redditPost;