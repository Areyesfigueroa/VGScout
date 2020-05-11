import React from "react";
import classes from "./SuggestionsBox.module.css";
import SuggestionItems from "./SuggestionItems/SuggestionItems";

const suggestionsBox = (props) => {

    return (
    <div className={classes.SuggestionsBox} ref={props.suggestionBoxRef}>
        <SuggestionItems 
        data={props.data} 
        clicked={props.clicked} 
        styleSelection={props.styleSelection}/>
    </div>
)};

export default suggestionsBox;