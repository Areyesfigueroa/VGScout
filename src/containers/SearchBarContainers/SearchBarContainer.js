import React, { Component } from "react";

import SearchBar from '../../components/SearchBar/SearchBar';
import SuggestionsBoxContainer from './SuggestionBoxContainer';
import { fetchData } from "../../rawgAPI";

class SearchBarContainer extends Component {

    state = {
        searchValue: '',
        prevSearchValue: '',
        prevSelection: '',
        selection: null,
        suggestions: null
    }

    searchInput = React.createRef();
    timerID = null;

    componentDidUpdate(prevProps, prevState) {
        //Takes care of removing the suggestions box if the search bar is empty.
        if(this.state.searchValue !== prevState.searchValue && this.state.searchValue.length <=0) {
            this.setState({ suggestions: null });
        }
    }

    //display the suggestion of what the user selects
    displaySelection = (selectionIdx) => {
        let result = this.state.suggestions[selectionIdx];
        this.searchInput.current.value = result.name;
        this.setState({
            selection: result,
        });
    }

    confirmSelection = () => {
        if(!this.state.selection) return;

        console.log(this.state.selection);
        this.setState({ suggestions: null });
    }
    
    //Handles suggestions and selects the first suggestion as the selection.
    handleSearch = (newSearchValue) => {

        if(this.timerID) {
            clearTimeout(this.timerID);
            this.timerID = null;
        } 

        this.timerID = setTimeout(() => {
            console.log("Load Data");
            if(newSearchValue.length > 0) {
                this.search(newSearchValue);
            }
            this.setState({ searchValue: newSearchValue });
        }, this.props.searchDelay * 1000); 
    }

    //Clear search textbox
    clearSearch = () => {
        this.searchInput.current.value = "";
        this.setState({
            searchValue: "",
            suggestions: null
        });
    }

    suggestionThresholdHandler(min, max) {
        if(this.props.suggestionCount > max) return max;
        if(this.props.suggestionCount < min) return min;

        return this.props.suggestionCount;
    }

    //Query search
    search = (newSearchValue) => {
        let suggestionCount = this.suggestionThresholdHandler(1, 5);

        //API Query
        fetchData(newSearchValue, suggestionCount).
        then(data => {
            if(this.state.searchValue.length > 0) {
                let results = data.results;
                this.setState({ 
                    suggestions: results.length > 0 ? results:null,
                    selection: results.length > 0 ? results[0]:null
                });
            } 
        }).catch(error => {
            console.log("Error: " + error);
        });
    }

    render() {

        return (
            <div onKeyDown={(event) => event.key === 'Enter' ? this.confirmSelection():null}>
                <SearchBar 
                searchRef={this.searchInput}
                search={this.handleSearch} 
                select={this.confirmSelection}
                clear={this.clearSearch}
                showCancelBtn={this.state.searchValue.length > 0}
                suggestions={this.state.suggestions ? this.state.suggestions:null} />
                
                {this.state.suggestions ? 
                <SuggestionsBoxContainer 
                data={this.state.suggestions}
                searchInput={this.searchInput}
                updateSelection={this.displaySelection} /> : null}
            </div>
        );
    }
}

export default SearchBarContainer;