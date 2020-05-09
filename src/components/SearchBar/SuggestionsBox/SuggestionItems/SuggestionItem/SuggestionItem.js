import React from "react" 
import classes from './SuggestionItem.module.css';

const suggestionItem = (props) => {
    return (
        <div className={classes.SuggestionItem}>
            <img src={props.img} alt="thumbnail"/>
            <p>{props.name}</p>
        </div>
    )
}

export default suggestionItem;