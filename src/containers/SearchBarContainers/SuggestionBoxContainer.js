import React from "react";
import SuggestionsBox from "../../components/SearchBar/SuggestionsBox/SuggestionsBox";

class SuggestionsBoxContainer extends Component {

    state = {
        selection: null
    }


    handleSelection = (selectionIdx) => {
        
    }

    render() {
        return (
            <SuggestionsBox data={props.suggestions} clicked={props.select} />
        )
    }
}

export default SuggestionsBoxContainer;