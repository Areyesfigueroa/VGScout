import React from "react";
import classes from "./SuggestionsBox.module.css";
import SuggestionItem from "./SuggestionItems/SuggestionItem/SuggestionItem";

const suggestionsBox = (props) => {
    return (
    <div className={classes.SuggestionsBox}>
        <SuggestionItem 
        onClick={""}
        img={props.data[0].short_screenshots[0].image}
        name={props.data[0].name}/>
        <SuggestionItem 
        img={props.data[1].short_screenshots[0].image}
        name={props.data[1].name}/>
        <SuggestionItem 
        img={props.data[2].short_screenshots[0].image}
        name={props.data[2].name}/>
    </div>
)};

export default suggestionsBox;