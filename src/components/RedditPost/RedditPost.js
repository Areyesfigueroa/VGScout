import React from 'react';
import classes from './RedditPost.module.css';

const redditPost = (props) => {
    return (
        <div className={classes.RedditPost + " " + classes.column}>
            <div className={classes.header}>
                <div className={classes.postInfo}>
                    <p>09/16/2020</p>
                    <p>Check it out</p>
                    <p>/u/areyes</p>
                </div>
                <div className={classes.fullPostLink}>
                    <a href="#">View Full Post</a>
                </div>
            </div>
            <hr />
            <div className={classes.postContent + " " + classes.collapse}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <button>more</button>
        </div>
    );
};

export default redditPost;