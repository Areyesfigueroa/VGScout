import React from "react";
import classes from "./Background.module.css";

const background = (props) => {
    return (
        <div className={classes.Background}>
            <img src={props.image} alt={`Background`}/>
        </div>
    );
}

export default background;