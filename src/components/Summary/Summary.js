import React from 'react';
import classes from './Summary.module.css';

const summary = (props) => {
    return (
        <div className={`${classes.Summary} ${props.expand ? classes.expand:classes.collapse}`}>
            <div className={classes.textContainer}>
                <div>
                    <h4>Summary</h4>
                    <p>
                        {props.textContent}
                    </p>
                </div>
            </div>
            <button onClick={props.clicked}>{props.expand ? "less":"more"}</button>
        </div>
    );
};

export default summary;