import React from 'react';
import classes from './Logo.module.css';

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={require("../../assets/VGS_Logo_01.png")} />
        </div>
    );
};

export default logo;