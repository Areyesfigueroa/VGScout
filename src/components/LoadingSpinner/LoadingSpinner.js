import React from 'react';
import classes from './LoadingSpinner.module.css';

const loadingSpinner = () => {
    return (
        <div className={classes.LoadingSpinner}>
            Loading...
        </div>
    );
};

export default loadingSpinner;