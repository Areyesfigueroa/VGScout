import React from 'react';
import classes from './LoadingSpinner.module.css';

const loadingSpinner = (props) => {
    return (
        <div className={classes.LoadingSpinner} style={props.style}>
            <div className={classes.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default loadingSpinner;