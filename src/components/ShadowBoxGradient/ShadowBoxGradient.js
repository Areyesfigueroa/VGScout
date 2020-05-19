import React from 'react'
import classes from './ShadowBoxGradient.module.css';

const shadowBoxGradient = (props) => 
{
    const degree = props.degree ? props.degree:0;
    const fromOpacity = props.fromOpacity ? props.fromOpacity:0.2;
    const toOpacity = props.toOpacity ? props.toOpacity:1;

    return (
        <div 
        className={classes.ShadowBox} 
        style={{
            background: `linear-gradient(${degree}, rgba(0,0,0,${fromOpacity}), rgba(0,0,0,${toOpacity}))`
        }}>
        </div>
    )
};

export default shadowBoxGradient;