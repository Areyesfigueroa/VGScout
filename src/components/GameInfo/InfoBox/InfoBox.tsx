import React from 'react';
import classes from './InfoBox.module.css';
import Info from './Info/Info';


interface Props {
    title: string;
    data: any[];
}
const infoBox: React.FC<Props> = (props) => {
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