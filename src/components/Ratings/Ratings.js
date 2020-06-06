import React from 'react';
import classes from './Ratings.module.css';


const ratings = (props) => {

    const ratings = {
        exceptional: props.ratings.length > 0 ? props.ratings[0].percent:0,
        recommended: props.ratings.length > 0 ? props.ratings[1].percent:0,
        meh: props.ratings.length > 0 ? props.ratings[2].percent:0,
        skip: props.ratings.length > 0 ? props.ratings[3].percent:0
    }

    const metacriticScore = props.metacritic ? props.metacritic:0;
    const thumbsUp = parseInt(ratings.exceptional + ratings.recommended);
    const thumbsDown = parseInt(ratings.meh + ratings.skip);

    return (
        <div className={classes.Ratings}>
            <div><img src={require("../../assets/metacriticLogo.png")} alt="Metacritic Logo"/><p>{metacriticScore}</p></div>
            <div><ion-icon name="thumbs-up-sharp"></ion-icon><p>{thumbsUp}%</p></div>
            <div><ion-icon name="thumbs-down-sharp"></ion-icon><p>{thumbsDown}%</p></div>
        </div>
    );
}

export default ratings;