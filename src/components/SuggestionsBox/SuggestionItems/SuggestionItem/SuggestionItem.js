import React from "react" 
import classes from './SuggestionItem.module.css';

const suggestionItem = (props) => {

    return (
        <div 
        tabIndex={props.id}
        id={props.id} 
        className={classes.SuggestionItem} 
        onClick={(event) => props.clicked(event)}
        onKeyDown={(event) => props.navSelection(event)}
        style={props.styleSelection(props.id)}>
            {props.img ? 
            <img src={props.img} alt="thumbnail"/> :
            <ion-icon name="alert-circle-outline"></ion-icon>}
            <p>{props.name}</p>
        </div>
    )
}

export default suggestionItem;