import React from 'react';
import classes from './RedditPostsMenu.module.css';
import ScrollableAnchor from 'react-scrollable-anchor';

const redditPostsMenu = (props) => {

    return (
        <ScrollableAnchor id={"redditPostsSection"}>
            <div
                className={classes.RedditPostsMenu}
                style={props.show ? { backgroundColor: "#333A41" } : null}
                onClick={props.clicked}
            >
                <div className={classes.clickable}>
                    <a href="#redditPostsSection" className="text">Reddit Posts {props.count}</a>
                </div>
                <div className={classes.button}>
                    <a href="#redditPostsSection" className="button"> {props.show ? "X" : "expand"} </a>
                </div>
            </div>
        </ScrollableAnchor>

    );
};

export default redditPostsMenu;