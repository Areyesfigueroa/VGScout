import React from "react" 
import classes from './SuggestionItem.module.css';

const suggestionItem = (props) => {

    return (
        <div 
        id={props.id} 
        className={classes.SuggestionItem} 
        onClick={(event) => props.clicked(event)}
        style={props.styleSelection(props.id)}>
            {props.img ? 
            <img src={props.img} alt="thumbnail"/> :
            <ion-icon name="alert-circle-outline"></ion-icon>}
            <p>{props.name}</p>
        </div>
    )
}

export default suggestionItem;