import React from 'react';
import classes from './Logo.module.css';

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={require("../../assets/logo.jpg")} />
            {/* <h1>VGScout</h1> */}
        </div>
    );
};

export default logo;