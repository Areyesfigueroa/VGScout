import React from "react" 
import classes from './SuggestionItem.module.css';

const suggestionItem = (props) => {
    return (
        <div className={classes.SuggestionItem} onClick={props.clicked}>
            {props.img ? 
            <img src={props.img} alt="thumbnail"/> :
            <ion-icon name="alert-circle-outline"></ion-icon>}
            <p>{props.name}</p>
        </div>
    )
}

export default suggestionItem;