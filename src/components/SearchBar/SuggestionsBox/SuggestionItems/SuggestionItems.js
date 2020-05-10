import React from "react";
import SuggestionItem from "./SuggestionItem/SuggestionItem";

const suggestionItems = (props) => {

    return props.data.map((suggestion, idx) => {
        return (
            <SuggestionItem
            clicked={() => props.clicked(idx)}
            key={suggestion.id}
            img={suggestion.short_screenshots.length > 0 ? suggestion.short_screenshots[0].image:null}
            name={suggestion.name} />
        )
    });
}

export default suggestionItems;