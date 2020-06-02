import React from 'react';
import classes from './RedditPostsHolder.module.css';

const redditPostsHolder = (props) => {
    return (
        <div className={classes.RedditPostsHolder}>
            <div>
                <p>Reddit Posts {props.count}</p>
            </div>
            <div>
                <p>
                    <a className="button" onClick={props.clicked}> {props.show ? "X":"expand"} </a>
                </p>
            </div>
        </div>
    );
};

export default redditPostsHolder;