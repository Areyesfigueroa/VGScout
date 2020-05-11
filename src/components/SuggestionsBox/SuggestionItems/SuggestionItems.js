import React from "react";
import SuggestionItem from "./SuggestionItem/SuggestionItem";

const suggestionItems = (props) => {

    return props.data.map((suggestion, idx) => {
        return (
            <SuggestionItem
            key={suggestion.id}
            id={idx}
            img={suggestion.short_screenshots.length > 0 ? suggestion.short_screenshots[0].image:null}
            name={suggestion.name}
            clicked={props.clicked}
            navSelection={props.navSelection}
            styleSelection={props.styleSelection}/>
        )
    });
}

export default suggestionItems;