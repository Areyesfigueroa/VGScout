import React from "react";
import classes from "./Ratings.module.css";
import metacriticLogo from "../../assets/metacriticLogo.png";

const ratings = (props) => {
  const ratings = {
    exceptional: 0,
    recommended: 0,
    meh: 0,
    skip: 0,
  };

  if (props.ratings.length > 0) {
    Object.keys(ratings).forEach((key, i) => {
      if (!props.ratings[i]) return;
      ratings[key] = props.ratings[i].percent;
    });
  }

  const metacriticScore = props.metacritic ? props.metacritic : 0;
  const thumbsUp = parseInt(ratings.exceptional + ratings.recommended);
  const thumbsDown = parseInt(ratings.meh + ratings.skip);

  return (
    <div className={classes.Ratings}>
      <div>
        <img src={metacriticLogo} alt="Metacritic Logo" />
        <p>{metacriticScore}</p>
      </div>
      <div>
        <ion-icon name="thumbs-up-sharp"></ion-icon>
        <p>{thumbsUp}%</p>
      </div>
      <div>
        <ion-icon name="thumbs-down-sharp"></ion-icon>
        <p>{thumbsDown}%</p>
      </div>
    </div>
  );
};

export default ratings;
