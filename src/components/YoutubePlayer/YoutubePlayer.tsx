import React from "react";
import classes from './YoutubePlayer.module.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const youtubePlayer = (props) => {
    let video = null;

    if(props.videoId) {
        video = (<iframe
        title="video" 
        src={`https://www.youtube-nocookie.com/embed/${props.videoId}`} 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
        </iframe>)
    } else {
        video = (
            <div>
                <p>No Video Found :(</p>
            </div>
        );
    }

    return (
        <div className={classes.YoutubePlayer}>
            {video ? video: <LoadingSpinner />}
        </div>
    );
}

export default youtubePlayer;