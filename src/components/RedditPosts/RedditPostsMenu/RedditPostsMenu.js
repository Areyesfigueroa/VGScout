import React from 'react';
import classes from './RedditPostsMenu.module.css';

const redditPostsMenu = (props) => {

    return (
        <div
            className={classes.RedditPostsMenu}
            style={props.show ? { backgroundColor: "rgba(0,0,0,1)" } : null}
            onClick={props.clicked}
        >
            <div className={classes.clickable}>
                <a href="#redditPostsSection" className="text">Reddit Posts {props.count}</a>
            </div>
            <div className={classes.button}>
                <a href="#redditPostsSection" className="button"> {props.show ? "X" : "expand"} </a>
            </div>
        </div>
    );
};

export default redditPostsMenu;