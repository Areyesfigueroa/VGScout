import React from 'react';
import classes from './Ratings.module.css';


const ratings = (props) => {
    return (
        <div className={classes.Ratings}>
            <div><img src={require("../../assets/metacriticLogo.png")} /> <p>80</p></div>
            <div><img src={require("../../assets/ignLogo.png")} /> <p>8</p></div>
            <div><img src={require("../../assets/gamespotLogo.png")} /> <p>4.5</p></div>
        </div>
    );
}

export default ratings;