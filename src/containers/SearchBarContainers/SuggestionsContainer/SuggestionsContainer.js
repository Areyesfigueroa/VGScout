import React from "react";
import SuggestionsBox from '../../../components/SearchBar/SuggestionsBox/SuggestionsBox';

const suggestionsContainer= (props) => (
    <SuggestionsBox suggestions={props.data}/>
);

export default suggestionsContainer;