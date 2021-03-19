import React from 'react';
import classes from './InfoBox.module.css';
import Info from './Info/Info';

const infoBox: React.FC = (props) => {
    return (
        <div className={classes.InfoBox}>
            <h4>{props.title}</h4>
            <ul>
               <Info data={props.data}/>
            </ul>
        </div>
    );
};

export default infoBox;