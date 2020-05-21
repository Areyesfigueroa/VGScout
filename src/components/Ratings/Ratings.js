import React from 'react';
import classes from './Ratings.module.css';


const ratings = (props) => {
    return (
        <div className={classes.Ratings}>
            <div><img src={require("../../assets/metacriticLogo.png")} alt="Metacritic Logo"/><p>{props.metacritic}</p></div>
            <div><img src={require("../../assets/ignLogo.png")} alt="IGN Logo"/><p>{props.ign}</p></div>
            <div><img src={require("../../assets/gamespotLogo.png")} alt="Gamespot Logo"/><p>{props.gamespot}</p></div>
        </div>
    );
}

export default ratings;