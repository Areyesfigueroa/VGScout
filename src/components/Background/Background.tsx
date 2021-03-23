import React from 'react';
import classes from "./Background.module.css";

interface Props {
    image: string;
}

const background: React.FC<Props> = (props) => {
    return (
        <div className={classes.Background}>
            <img src={props.image} alt={`Background`}/>
        </div>
    );
}

export default background;