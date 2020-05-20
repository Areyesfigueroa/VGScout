import React from "react";
import classes from "./Background.module.css";

const background = (props) => {

    let src='', desc='';

    if(props.value && props.value.short_screenshots.length > 0) {
        src = props.value.short_screenshots[0].image;
        desc = props.value.name;
    } else {
        console.log("Default Background");
        src = require("../../assets/background-default.png");
        desc = "Default Background";
    }

    return (
        <div className={classes.Background}>
            <img src={src} alt={`${desc} background`}/>
        </div>
    );
}

export default background;